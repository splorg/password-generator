import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RefreshCw, Copy } from 'lucide-react';

import { type PasswordForm as PasswordFormType, passwordFormSchema, MIN_PASSWORD_LENGTH, MAX_PASSWORD_LENGTH } from "../schemas/password-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";

import { Form } from "./ui/form";
import { Input } from "./ui/input";
import { Slider } from "./ui/slider";
import { Switch } from "./ui/switch";

export const PasswordForm = () => {
  const [password, setPassword] = useState("");

  const form = useForm<PasswordFormType>({
    resolver: zodResolver(passwordFormSchema),
    defaultValues: {
      length: 12,
      uppercase: false,
      numbers: false,
      symbols: false,
    },
  });

  const generatePassword = (data: PasswordFormType) => {
    const { length, uppercase, numbers, symbols } = data;

    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=[]{};:,.<>?";

    let characters = "abcdefghijklmnopqrstuvwxyz";

    if (uppercase) {
      characters += uppercaseChars;
    }

    if (numbers) {
      characters += numberChars;
    }

    if (symbols) {
      characters += symbolChars;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }

    setPassword(password);
  }

  const copyPassword = async () => {
    toast.promise(navigator.clipboard.writeText(password), {
      loading: "Copying password...",
      success: "Password copied to clipboard!",
      error: "Failed to copy password!",
    })
  }

  useEffect(() => {
    const values = form.getValues();
    generatePassword(values);
  }, [])

  useEffect(() => {
    const { unsubscribe } = form.watch(() => form.handleSubmit(generatePassword)())

    return () => unsubscribe()
  }, [form.handleSubmit, form.watch])

  return (
    <Form {...form}>
      <form className="flex flex-col gap-8 w-full" onSubmit={form.handleSubmit(generatePassword)}>
        <FormField
          control={form.control}
          name="length"
          render={({ field }) => (
            <FormItem className="w-full">
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                <div>
                  <FormLabel className="text-left">Length</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} inputMode="numeric" className="max-w-20" />
                  </FormControl>
                </div>
                <Slider
                  min={MIN_PASSWORD_LENGTH}
                  max={MAX_PASSWORD_LENGTH}
                  step={1}
                  value={[field.value]}
                  onValueChange={field.onChange}
                  className="max-w-60 pt-5"
                />
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col gap-2">
          <FormField 
            control={form.control}
            name="uppercase"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center gap-4">
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="cursor-pointer"
                  />
                </FormControl>
                <div className="space-y-0.5">
                  <FormLabel className="text-base">
                    Uppercase letters
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />

          <FormField 
            control={form.control}
            name="numbers"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center gap-4">
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="cursor-pointer"
                  />
                </FormControl>
                <div className="space-y-0.5">
                  <FormLabel className="text-base">
                    Numbers
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="symbols"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center gap-4">
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="cursor-pointer"
                  />
                </FormControl>
                <div className="space-y-0.5">
                  <FormLabel className="text-base">
                    Symbols
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <input type="text" value={password} readOnly disabled className="w-full p-4 rounded-md bg-muted text-ellipsis" />

          <div className="flex flex-row gap-1">
            <button type="button" className="cursor-pointer hover:bg-muted rounded-md p-4" onClick={copyPassword}>
              <Copy className="w-5 h-5" />
            </button>
            <button type="button" className="cursor-pointer hover:bg-muted rounded-md p-4" onClick={() => generatePassword(form.getValues())}>
              <RefreshCw className="w-5 h-5" />
            </button>
          </div>
        </div>
      </form>
    </Form>
  )
}
