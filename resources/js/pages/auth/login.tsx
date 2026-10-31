import { Form, Head } from "@inertiajs/react";
import { Sprout, ShieldCheck, ArrowRight, Leaf, Fish } from "lucide-react";

import InputError from "@/components/input-error";
import PasswordInput from "@/components/password-input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";

import { store } from "@/routes/login";
import { request } from "@/routes/password";
import PasskeyVerify from "@/components/passkey-verify";

type Props = {
    status?: string;
    canResetPassword: boolean;
};

export default function Login({ status, canResetPassword }: Props) {
    return (
        <>
            <Head title="Sign In | Municipal Agriculture Office" />

            <PasskeyVerify />

            <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
                {/* Background decoration */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-green-100/70 blur-3xl" />
                    <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-sky-100/70 blur-3xl" />
                </div>

                <div className="relative z-10 w-full max-w-md">
                    {/* Branding */}
                    <div className="mb-8 text-center">
                        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-800 text-white shadow-lg shadow-green-900/20">
                            <Sprout size={34} strokeWidth={1.8} />
                        </div>

                        <h1 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
                            MUNICIPAL AGRICULTURE OFFICE
                        </h1>

                        <p className="mt-2 text-sm text-slate-500">
                            Municipality of Estancia, Iloilo
                        </p>

                        <div className="mx-auto mt-5 flex max-w-xs items-center justify-center gap-3">
                            <div className="h-1 w-12 rounded-full bg-green-700" />
                            <div className="h-1 w-12 rounded-full bg-sky-600" />
                        </div>
                    </div>

                    {/* Login card */}
                    <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-8">
                        <div className="mb-7">
                            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-800">
                                <ShieldCheck size={23} />
                            </div>

                            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                                Welcome back
                            </h2>

                            <p className="mt-2 text-sm leading-6 text-slate-500">
                                Sign in to access the MAO Management System.
                            </p>
                        </div>

                        {status && (
                            <div className="mb-5 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
                                {status}
                            </div>
                        )}

                        <Form
                            {...store.form()}
                            resetOnSuccess={["password"]}
                            className="space-y-5"
                        >
                            {({ processing, errors }) => (
                                <>
                                    {/* Email */}
                                    <div className="space-y-2">
                                        <Label htmlFor="email">
                                            Email Address
                                        </Label>

                                        <Input
                                            id="email"
                                            type="email"
                                            name="email"
                                            required
                                            autoFocus
                                            autoComplete="email"
                                            placeholder="Enter your email address"
                                            className="h-12 w-full rounded-lg border-slate-200 bg-slate-50/50 px-4 focus-visible:ring-green-700"
                                        />

                                        <InputError message={errors.email} />
                                    </div>

                                    {/* Password */}
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between gap-2">
                                            <Label htmlFor="password">
                                                Password
                                            </Label>

                                            {canResetPassword && (
                                                <a
                                                    href={request().url}
                                                    className="text-xs font-semibold text-green-700 hover:text-green-900"
                                                >
                                                    Forgot password?
                                                </a>
                                            )}
                                        </div>

                                        <PasswordInput
                                            id="password"
                                            name="password"
                                            required
                                            autoComplete="current-password"
                                            placeholder="Enter your password"
                                        />

                                        <InputError message={errors.password} />
                                    </div>

                                    {/* Remember me */}
                                    <div className="flex items-center gap-3">
                                        <Checkbox
                                            id="remember"
                                            name="remember"
                                        />

                                        <Label
                                            htmlFor="remember"
                                            className="cursor-pointer text-sm font-normal text-slate-600"
                                        >
                                            Remember me
                                        </Label>
                                    </div>

                                    {/* Submit */}
                                    <Button
                                        type="submit"
                                        disabled={processing}
                                        data-test="login-button"
                                        className="h-12 w-full rounded-lg bg-green-800 text-sm font-semibold text-white shadow-md shadow-green-900/10 transition hover:bg-green-900"
                                    >
                                        {processing ? (
                                            <>
                                                <Spinner />
                                                Signing in...
                                            </>
                                        ) : (
                                            <>
                                                Sign In
                                                <ArrowRight
                                                    className="ml-2"
                                                    size={17}
                                                />
                                            </>
                                        )}
                                    </Button>
                                </>
                            )}
                        </Form>
                    </div>

                    {/* Agriculture and fisheries identity */}
                    <div className="mt-6 grid grid-cols-2 gap-3">
                        <div className="flex items-center justify-center gap-2 rounded-xl border border-green-100 bg-white/80 px-3 py-3 text-xs font-semibold text-green-800 shadow-sm">
                            <Leaf size={16} />
                            Farm Agriculture
                        </div>

                        <div className="flex items-center justify-center gap-2 rounded-xl border border-sky-100 bg-white/80 px-3 py-3 text-xs font-semibold text-sky-700 shadow-sm">
                            <Fish size={16} />
                            Fisheries
                        </div>
                    </div>

                    {/* Footer */}
                    <p className="mt-8 text-center text-xs text-slate-400">
                        © {new Date().getFullYear()} Municipality of Estancia,
                        Iloilo
                    </p>
                </div>
            </main>
        </>
    );
}

Login.layout = {
    title: "MAO Login",
    description: "Municipal Agriculture Office Management System",
};
