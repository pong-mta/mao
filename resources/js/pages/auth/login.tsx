import { Form, Head } from "@inertiajs/react";
import { Sprout, Fish, Tractor, ShieldCheck, ArrowRight } from "lucide-react";

import InputError from "@/components/input-error";
import PasswordInput from "@/components/password-input";
import TextLink from "@/components/text-link";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";

import { register } from "@/routes";
import { store } from "@/routes/login";
import { request } from "@/routes/password";

type Props = {
    status?: string;
    canResetPassword: boolean;
};

export default function Login({ status, canResetPassword }: Props) {
    return (
        <>
            <Head title="Login | Municipal Agriculture Office" />

            <main className="grid min-h-screen bg-white lg:grid-cols-2">
                {/* LEFT BRANDING PANEL */}
                <section className="relative hidden min-h-screen flex-col justify-between overflow-hidden bg-[#14532d] p-10 text-white lg:flex xl:p-16">
                    <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border-[70px] border-white/5" />
                    <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full border-[70px] border-white/5" />

                    {/* Brand */}
                    <div className="relative z-10 flex items-center gap-4">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-green-800">
                            <Sprout size={30} />
                        </div>

                        <div>
                            <h1 className="text-sm font-extrabold tracking-wider xl:text-base">
                                MUNICIPAL AGRICULTURE OFFICE
                            </h1>
                            <p className="mt-1 text-sm text-green-200">
                                Municipality of Estancia, Iloilo
                            </p>
                        </div>
                    </div>

                    {/* Main content */}
                    <div className="relative z-10 my-12 max-w-xl">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-green-100">
                            <ShieldCheck size={15} />
                            Official Management Portal
                        </div>

                        <h2 className="text-4xl leading-tight font-extrabold xl:text-6xl">
                            Empowering
                            <br />
                            <span className="text-green-300">Agriculture</span>
                            <br />
                            and Fisheries.
                        </h2>

                        <p className="mt-6 max-w-lg text-base leading-8 text-green-100 xl:text-lg">
                            A unified digital platform supporting farmers,
                            fisherfolk, agricultural programs, fisheries
                            services, and municipal operations.
                        </p>

                        {/* Modules */}
                        <div className="mt-12 grid grid-cols-2 gap-4">
                            <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                                <Tractor
                                    className="mb-4 text-green-300"
                                    size={28}
                                />
                                <h3 className="font-bold">Farm Agriculture</h3>
                                <p className="mt-2 text-xs leading-5 text-green-100">
                                    Farmer records, crops, production and
                                    assistance.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                                <Fish className="mb-4 text-sky-300" size={28} />
                                <h3 className="font-bold">Fisheries</h3>
                                <p className="mt-2 text-xs leading-5 text-green-100">
                                    Fisherfolk, vessels, catch monitoring and
                                    programs.
                                </p>
                            </div>
                        </div>
                    </div>

                    <p className="relative z-10 text-xs text-green-200">
                        © {new Date().getFullYear()} Municipality of Estancia,
                        Iloilo. All rights reserved.
                    </p>
                </section>

                {/* RIGHT LOGIN SECTION */}
                <section className="flex min-h-screen items-center justify-center bg-slate-50 px-5 py-10 sm:px-8 lg:px-10 xl:px-16">
                    <div className="w-full max-w-md">
                        {/* Mobile branding */}
                        <div className="mb-10 flex items-center gap-3 lg:hidden">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-800 text-white">
                                <Sprout size={27} />
                            </div>

                            <div className="min-w-0">
                                <h1 className="text-sm font-extrabold tracking-tight text-slate-900 sm:text-base">
                                    MUNICIPAL AGRICULTURE OFFICE
                                </h1>
                                <p className="text-xs text-slate-500">
                                    Municipality of Estancia, Iloilo
                                </p>
                            </div>
                        </div>

                        {/* Heading */}
                        <div className="mb-8">
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-800">
                                <ShieldCheck size={25} />
                            </div>

                            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
                                Welcome back
                            </h2>

                            <p className="mt-2 text-sm leading-6 text-slate-500">
                                Sign in to access your MAO Management System
                                account.
                            </p>
                        </div>

                        {/* Status */}
                        {status && (
                            <div className="mb-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
                                {status}
                            </div>
                        )}

                        {/* Login Form */}
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
                                            placeholder="Enter your email"
                                            className="h-12 rounded-xl border-slate-200 bg-white px-4"
                                        />

                                        <InputError message={errors.email} />
                                    </div>

                                    {/* Password */}
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between gap-3">
                                            <Label htmlFor="password">
                                                Password
                                            </Label>

                                            {canResetPassword && (
                                                <TextLink
                                                    href={request()}
                                                    className="text-xs font-semibold text-green-700 hover:text-green-900"
                                                >
                                                    Forgot password?
                                                </TextLink>
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

                                    {/* Remember */}
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
                                        className="h-12 w-full rounded-xl bg-green-800 font-semibold text-white shadow-lg shadow-green-900/10 transition hover:bg-green-900"
                                    >
                                        {processing ? (
                                            <>
                                                <Spinner />
                                                Signing in...
                                            </>
                                        ) : (
                                            <>
                                                Sign In
                                                <ArrowRight size={17} />
                                            </>
                                        )}
                                    </Button>
                                </>
                            )}
                        </Form>

                        {/* Registration */}
                        <div className="mt-8 border-t border-slate-200 pt-6 text-center">
                            <p className="text-sm text-slate-500">
                                Don't have an account?{" "}
                                <TextLink
                                    href={register()}
                                    className="font-bold text-green-700 hover:text-green-900"
                                >
                                    Create an account
                                </TextLink>
                            </p>
                        </div>

                        {/* Mobile footer */}
                        <p className="mt-10 text-center text-xs text-slate-400 lg:hidden">
                            © {new Date().getFullYear()} Municipality of
                            Estancia, Iloilo
                        </p>
                    </div>
                </section>
            </main>
        </>
    );
}

Login.layout = {
    title: "MAO Login",
    description: "Municipal Agriculture Office Management System",
};
