"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type FieldName = "name" | "email" | "subject" | "message";
type Values = Record<FieldName, string>;
type Errors = Partial<Record<FieldName, string>>;

const FIELD_ORDER: FieldName[] = ["name", "email", "subject", "message"];
const EMPTY: Values = { name: "", email: "", subject: "", message: "" };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: Values): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "نام و نام خانوادگی را وارد کنید.";
  if (!values.email.trim()) errors.email = "ایمیل را وارد کنید.";
  else if (!EMAIL_PATTERN.test(values.email.trim()))
    errors.email = "ایمیل واردشده معتبر نیست.";
  if (!values.subject.trim()) errors.subject = "موضوع پیام را وارد کنید.";
  if (!values.message.trim()) errors.message = "متن پیام را وارد کنید.";
  return errors;
}

function Field({
  name,
  label,
  error,
  className,
  children,
}: {
  name: FieldName;
  label: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <Label htmlFor={`contact-${name}`} className="mb-2 block text-[15px]">
        {label}
      </Label>
      {children}
      {error && (
        <p id={`contact-${name}-error`} className="mt-2 text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

/**
 * UI-only contact form: client-side validation, no backend.
 * When a backend exists, send `values` where the TODO below is.
 */
export function ContactForm() {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [attempted, setAttempted] = useState(false);
  const [uiOnlyNotice, setUiOnlyNotice] = useState(false);

  const update = (field: FieldName) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const next = { ...values, [field]: e.target.value };
    setValues(next);
    setUiOnlyNotice(false);
    // After the first submit attempt, errors update as the user types
    if (attempted) setErrors(validate(next));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    setAttempted(true);

    const firstInvalid = FIELD_ORDER.find((f) => found[f]);
    if (firstInvalid) {
      setUiOnlyNotice(false);
      document.getElementById(`contact-${firstInvalid}`)?.focus();
      return;
    }

    // TODO: send `values` to the backend once it exists. Until then, be honest about it.
    setUiOnlyNotice(true);
  };

  const describe = (field: FieldName) =>
    errors[field] ? `contact-${field}-error` : undefined;

  return (
    <section aria-labelledby="contact-form-heading">
      <h2 id="contact-form-heading" className="text-xl font-semibold leading-8 lg:text-2xl">
        ارسال پیام
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">همه فیلدها الزامی هستند.</p>

      <form noValidate onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <Field name="name" label="نام و نام خانوادگی" error={errors.name}>
            <Input
              id="contact-name"
              name="name"
              autoComplete="name"
              placeholder="نام خود را وارد کنید"
              value={values.name}
              onChange={update("name")}
              aria-required="true"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={describe("name")}
              className="h-12 text-base"
            />
          </Field>

          <Field name="email" label="ایمیل" error={errors.email}>
            <Input
              id="contact-email"
              name="email"
              type="email"
              dir="ltr"
              autoComplete="email"
              placeholder="example@email.com"
              value={values.email}
              onChange={update("email")}
              aria-required="true"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={describe("email")}
              className="h-12 text-right text-base placeholder:text-right"
            />
          </Field>
        </div>

        <Field name="subject" label="موضوع" error={errors.subject}>
          <Input
            id="contact-subject"
            name="subject"
            placeholder="موضوع پیام"
            value={values.subject}
            onChange={update("subject")}
            aria-required="true"
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={describe("subject")}
            className="h-12 text-base"
          />
        </Field>

        <Field name="message" label="پیام" error={errors.message}>
          <Textarea
            id="contact-message"
            name="message"
            rows={7}
            placeholder="پیام خود را بنویسید..."
            value={values.message}
            onChange={update("message")}
            aria-required="true"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={describe("message")}
            className="min-h-44 resize-y text-base leading-8"
          />
        </Field>

        <Button
          type="submit"
          className="h-11 w-full rounded-[10px] px-7 text-[15px] sm:w-auto"
        >
          ارسال پیام
        </Button>

        {/* Live region: announces the result without moving focus */}
        <div role="status" aria-live="polite">
          {uiOnlyNotice && (
            <p className="border-t border-border pt-5 text-[15px] leading-7 text-muted-foreground">
              این فرم هنوز به سامانه ارسال متصل نیست و پیام شما ارسال نشد. لطفاً
              فعلاً از ایمیل دانشگاهی در همین صفحه استفاده کنید.
            </p>
          )}
        </div>
      </form>
    </section>
  );
}
