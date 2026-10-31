import { Form, Head } from "@inertiajs/react";
import {
    ArrowRight,
    Sprout,
    Tractor,
    Fish,
    Leaf,
    Waves,
    ShieldCheck,
    LockKeyhole,
} from "lucide-react";

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
            <Head title="Municipal Agriculture Office" />

            <main className="relative min-h-screen w-full overflow-x-hidden bg-[#f5f7f4]">
                <div className="grid min-h-screen w-full lg:grid-cols-[1.05fr_0.95fr]">
                    {/* =====================================
                        LEFT SIDE - DESKTOP BRANDING
                    ====================================== */}

                    <section className="relative hidden overflow-hidden bg-[#123f2b] text-white lg:flex lg:min-h-screen lg:flex-col lg:justify-between">
                        {/* Background decoration */}
                        <div className="pointer-events-none absolute inset-0 overflow-hidden">
                            <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full border border-white/10" />
                            <div className="absolute -right-24 -top-24 h-[450px] w-[450px] rounded-full border border-white/10" />
                            <div className="absolute -bottom-64 -left-40 h-[600px] w-[600px] rounded-full border-[80px] border-white/[0.04]" />

                            <div className="absolute right-0 bottom-0 h-96 w-96 bg-green-500/10 blur-[100px]" />
                        </div>

                        {/* Branding */}
                        <div className="relative z-10 px-10 pt-10 xl:px-16 xl:pt-12">
                            <div className="flex items-center gap-4">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#14532d] shadow-xl">
                                    <Sprout size={30} />
                                </div>

                                <div>
                                    <h1 className="text-sm font-black tracking-[0.12em] xl:text-base">
                                        MUNICIPAL AGRICULTURE OFFICE
                                    </h1>

                                    <p className="mt-1 text-sm text-green-200">
                                        Municipality of Estancia, Iloilo
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Main branding content */}
                        <div className="relative z-10 mx-auto w-full max-w-2xl px-10 py-12 xl:px-16">
                            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-4 py-2">
                                <span className="h-2 w-2 rounded-full bg-green-400" />
                                <span className="text-xs font-semibold tracking-wide text-green-100">
                                    INTEGRATED MUNICIPAL PLATFORM
                                </span>
                            </div>

                            <h2 className="text-5xl leading-[1.12] font-black tracking-tight xl:text-6xl">
                                Growing
                                <span className="block text-green-300">
                                    Agriculture.
                                </span>
                                Sustaining
                                <span className="block text-sky-300">
                                    Fisheries.
                                </span>
                            </h2>

                            <p className="mt-7 max-w-lg text-base leading-8 text-green-100/80 xl:text-lg">
                                Supporting the agricultural and fisheries
                                communities of Estancia through technology,
                                better services, and efficient municipal
                                management.
                            </p>

                            {/* Service cards */}
                            <div className="mt-12 grid grid-cols-2 gap-4">
                                <div className="rounded-2xl border border-white/10 bg-white/[0.08] p-5 backdrop-blur-sm transition hover:bg-white/[0.12]">
                                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-green-400/15 text-green-300">
                                        <Tractor size={24} />
                                    </div>

                                    <h3 className="text-base font-bold">
                                        Farm Agriculture
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-green-100/70">
                                        Farmer records, crop monitoring,
                                        production, and agricultural assistance.
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-white/10 bg-white/[0.08] p-5 backdrop-blur-sm transition hover:bg-white/[0.12]">
                                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-sky-400/15 text-sky-300">
                                        <Fish size={24} />
                                    </div>

                                    <h3 className="text-base font-bold">
                                        Fisheries
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-green-100/70">
                                        Fisherfolk records, fishing vessels,
                                        catch monitoring, and programs.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Bottom */}
                        <div className="relative z-10 flex items-center justify-between gap-4 px-10 pb-8 text-xs text-green-200/70 xl:px-16">
                            <span>
                                © {new Date().getFullYear()} Municipality of
                                Estancia
                            </span>
                            <span>Estancia, Iloilo, Philippines</span>
                        </div>
                    </section>

                    {/* =====================================
                        RIGHT SIDE - LOGIN
                    ====================================== */}

                    <section className="relative flex min-h-screen items-center justify-center px-5 py-10 sm:px-8 md:px-12 lg:px-10 xl:px-16">
                        {/* Subtle background decoration */}
                        <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-green-100/50 blur-[100px]" />

                        <div className="relative z-10 w-full max-w-[430px]">
                            {/* Mobile / Tablet brand strip */}
                            <div className="mb-10 flex items-center justify-center gap-3 lg:hidden">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#14532d] text-white shadow-lg">
                                    <Sprout size={25} />
                                </div>

                                <div>
                                    <p className="text-xs font-black tracking-wider text-slate-800">
                                        MUNICIPAL AGRICULTURE OFFICE
                                    </p>
                                    <p className="mt-1 text-xs text-slate-500">
                                        Estancia, Iloilo
                                    </p>
                                </div>
                            </div>

                            {/* Login card */}
                            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_20px_60px_-25px_rgba(15,23,42,0.18)] sm:rounded-3xl sm:p-9">
                                {/* Small accent */}
                                <div className="mb-8 flex items-center gap-2">
                                    <div className="h-1 w-10 rounded-full bg-green-700" />
                                    <div className="h-1 w-5 rounded-full bg-sky-600" />
                                </div>

                                {/* Status message */}
                                {status && (
                                    <div className="mb-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
                                        {status}
                                    </div>
                                )}

                                {/* Login form */}
                                <Form
                                    {...store.form()}
                                    resetOnSuccess={["password"]}
                                    className="space-y-6"
                                >
                                    {({ processing, errors }) => (
                                        <>
                                            {/* Email */}
                                            <div className="space-y-2">
                                                <Label
                                                    htmlFor="email"
                                                    className="text-sm font-semibold text-slate-700"
                                                >
                                                    Email Address
                                                </Label>

                                                <Input
                                                    id="email"
                                                    type="email"
                                                    name="email"
                                                    required
                                                    autoFocus
                                                    autoComplete="email"
                                                    placeholder="name@example.com"
                                                    className="h-12 w-full rounded-xl border-slate-200 bg-slate-50/50 px-4 text-sm transition focus-visible:border-green-700 focus-visible:ring-green-700"
                                                />

                                                <InputError
                                                    message={errors.email}
                                                />
                                            </div>

                                            {/* Password */}
                                            <div className="space-y-2">
                                                <div className="flex items-center justify-between gap-3">
                                                    <Label
                                                        htmlFor="password"
                                                        className="text-sm font-semibold text-slate-700"
                                                    >
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

                                                <InputError
                                                    message={errors.password}
                                                />
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
                                                className="h-12 w-full rounded-xl bg-[#14532d] text-sm font-bold text-white shadow-lg shadow-green-900/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0f4229] hover:shadow-xl disabled:translate-y-0"
                                            >
                                                {processing ? (
                                                    <>
                                                        <Spinner />
                                                        Signing in...
                                                    </>
                                                ) : (
                                                    <>
                                                        Sign In
                                                        <ArrowRight size={18} />
                                                    </>
                                                )}
                                            </Button>
                                        </>
                                    )}
                                </Form>

                                {/* Registration */}
                                <div className="mt-7 border-t border-slate-100 pt-6 text-center">
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
                            </div>

                            {/* Agriculture / Fisheries indicators */}
                            <div className="mt-7 flex items-center justify-center gap-6">
                                <div className="flex items-center gap-2 text-xs font-semibold text-green-800">
                                    <Leaf size={16} />
                                    Agriculture
                                </div>

                                <div className="h-4 w-px bg-slate-300" />

                                <div className="flex items-center gap-2 text-xs font-semibold text-sky-700">
                                    <Waves size={17} />
                                    Fisheries
                                </div>
                            </div>

                            {/* Security and footer */}
                            <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-400">
                                <LockKeyhole size={13} />
                                <span>Secure municipal access</span>
                            </div>

                            <p className="mt-3 text-center text-xs text-slate-400">
                                © {new Date().getFullYear()} Municipality of
                                Estancia, Iloilo
                            </p>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}
