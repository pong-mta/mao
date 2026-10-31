import { Form, Head } from "@inertiajs/react";
import {
    ArrowRight,
    Sprout,
    Tractor,
    Fish,
    Leaf,
    Waves,
    ShieldCheck,
    ChartNoAxesCombined,
    MapPin,
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
            <Head title="Municipal Agriculture Office | Estancia" />

            <main className="min-h-screen w-full overflow-x-hidden bg-[#f7f9f7]">
                <div className="grid min-h-screen lg:grid-cols-[1.1fr_0.9fr]">
                    {/* LEFT PANEL - DESKTOP */}
                    <section className="relative hidden min-h-screen flex-col justify-between overflow-hidden bg-[#123d2b] text-white lg:flex">
                        {/* Background effects */}
                        <div className="pointer-events-none absolute inset-0 overflow-hidden">
                            <div className="absolute -right-40 -top-40 h-[650px] w-[650px] rounded-full border border-white/[0.07]" />
                            <div className="absolute -right-20 -top-20 h-[450px] w-[450px] rounded-full border border-white/[0.07]" />
                            <div className="absolute -bottom-72 -left-48 h-[700px] w-[700px] rounded-full border-[100px] border-white/[0.035]" />
                            <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-green-500/10 blur-[120px]" />
                            <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-emerald-400/10 blur-[100px]" />
                        </div>

                        {/* Top identity */}
                        <div className="relative z-10 px-10 pt-10 xl:px-16 xl:pt-12">
                            <div className="flex items-center gap-3">
                                <div className="h-1 w-8 rounded-full bg-green-400" />
                                <span className="text-xs font-bold tracking-[0.2em] text-green-200">
                                    MUNICIPAL GOVERNMENT OF ESTANCIA
                                </span>
                            </div>

                            <p className="mt-3 text-sm font-semibold tracking-wide text-white">
                                MUNICIPAL AGRICULTURE OFFICE
                            </p>
                        </div>

                        {/* Main content */}
                        <div className="relative z-10 mx-auto w-full max-w-3xl px-10 py-12 xl:px-16">
                            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2">
                                <span className="h-2 w-2 rounded-full bg-green-400" />
                                <span className="text-xs font-semibold tracking-wide text-green-100">
                                    AGRICULTURE & FISHERIES MANAGEMENT
                                </span>
                            </div>

                            <h1 className="max-w-2xl text-5xl leading-[1.12] font-extrabold tracking-tight xl:text-7xl">
                                Growing a
                                <span className="block text-green-300">
                                    sustainable
                                </span>
                                future.
                            </h1>

                            <p className="mt-7 max-w-xl text-base leading-8 text-green-100/75 xl:text-lg">
                                Connecting our farmers and fisherfolk through
                                accessible services, better information, and
                                modern municipal technology.
                            </p>

                            {/* Feature cards */}
                            <div className="mt-14 grid grid-cols-2 gap-4">
                                <div className="group rounded-2xl border border-white/10 bg-white/[0.07] p-5 transition duration-300 hover:bg-white/[0.12] xl:p-6">
                                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-green-400/15 text-green-300">
                                        <Tractor size={25} />
                                    </div>

                                    <h2 className="text-lg font-bold">
                                        Farm Agriculture
                                    </h2>

                                    <p className="mt-2 text-sm leading-6 text-green-100/65">
                                        Farmer profiles, farm records, crop
                                        monitoring and agricultural assistance.
                                    </p>
                                </div>

                                <div className="group rounded-2xl border border-white/10 bg-white/[0.07] p-5 transition duration-300 hover:bg-white/[0.12] xl:p-6">
                                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-400/15 text-sky-300">
                                        <Fish size={25} />
                                    </div>

                                    <h2 className="text-lg font-bold">
                                        Fisheries
                                    </h2>

                                    <p className="mt-2 text-sm leading-6 text-green-100/65">
                                        Fisherfolk records, fishing vessels,
                                        catch monitoring and fisheries programs.
                                    </p>
                                </div>
                            </div>

                            {/* Platform information */}
                            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 text-xs text-green-100/60">
                                <div className="flex items-center gap-2">
                                    <ChartNoAxesCombined size={15} />
                                    Integrated records
                                </div>

                                <div className="flex items-center gap-2">
                                    <ShieldCheck size={15} />
                                    Secure access
                                </div>

                                <div className="flex items-center gap-2">
                                    <MapPin size={15} />
                                    Estancia, Iloilo
                                </div>
                            </div>
                        </div>

                        {/* Bottom footer */}
                        <div className="relative z-10 flex items-center justify-between gap-4 px-10 pb-8 text-xs text-green-100/50 xl:px-16">
                            <span>
                                © {new Date().getFullYear()} Municipality of
                                Estancia
                            </span>
                            <span>All rights reserved.</span>
                        </div>
                    </section>

                    {/* RIGHT PANEL - LOGIN */}
                    <section className="relative flex min-h-screen items-center justify-center px-5 py-10 sm:px-8 md:px-12 lg:px-10 xl:px-16">
                        {/* Subtle background */}
                        <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-green-100/60 blur-[100px]" />
                        <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-emerald-100/40 blur-[100px]" />

                        <div className="relative z-10 w-full max-w-[440px]">
                            {/* Mobile identity - no logo */}
                            <div className="mb-10 lg:hidden">
                                <div className="mb-3 flex items-center gap-2">
                                    <span className="h-1 w-8 rounded-full bg-green-700" />
                                    <span className="h-1 w-4 rounded-full bg-sky-600" />
                                </div>

                                <p className="text-xs font-bold tracking-[0.15em] text-green-800">
                                    MUNICIPAL AGRICULTURE OFFICE
                                </p>

                                <p className="mt-1 text-xs text-slate-500">
                                    Municipality of Estancia, Iloilo
                                </p>
                            </div>

                            {/* Login card */}
                            <div className="w-full rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_20px_70px_-30px_rgba(15,23,42,0.20)] sm:rounded-3xl sm:p-9">
                                {/* Accent */}
                                <div className="mb-8 flex items-center gap-2">
                                    <div className="h-1 w-10 rounded-full bg-green-700" />
                                    <div className="h-1 w-5 rounded-full bg-sky-600" />
                                </div>

                                {/* Status */}
                                {status && (
                                    <div className="mb-6 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
                                        {status}
                                    </div>
                                )}

                                {/* Form */}
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
                                                    placeholder="Enter your email address"
                                                    className="h-12 w-full rounded-xl border-slate-200 bg-slate-50/60 px-4 text-sm transition focus-visible:border-green-700 focus-visible:ring-green-700"
                                                />

                                                <InputError
                                                    message={errors.email}
                                                />
                                            </div>

                                            {/* Password */}
                                            <div className="space-y-2">
                                                <div className="flex flex-wrap items-center justify-between gap-2">
                                                    <Label
                                                        htmlFor="password"
                                                        className="text-sm font-semibold text-slate-700"
                                                    >
                                                        Password
                                                    </Label>

                                                    {canResetPassword && (
                                                        <TextLink
                                                            href={request()}
                                                            className="text-xs font-semibold text-green-700 transition hover:text-green-900"
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
                                                className="group h-12 w-full rounded-xl bg-[#14532d] text-sm font-bold text-white shadow-lg shadow-green-900/10 transition duration-200 hover:-translate-y-0.5 hover:bg-[#103e29] hover:shadow-xl disabled:translate-y-0"
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
                                                            size={18}
                                                            className="transition-transform group-hover:translate-x-1"
                                                        />
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
                                            className="font-bold text-green-700 transition hover:text-green-900"
                                        >
                                            Create an account
                                        </TextLink>
                                    </p>
                                </div>
                            </div>

                            {/* Service identity */}
                            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
                                <div className="flex items-center gap-2 text-xs font-semibold text-green-800">
                                    <Leaf size={16} />
                                    Agriculture
                                </div>

                                <div className="flex items-center gap-2 text-xs font-semibold text-sky-700">
                                    <Waves size={17} />
                                    Fisheries
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="mt-8 text-center">
                                <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
                                    <ShieldCheck size={14} />
                                    Secure municipal access
                                </div>

                                <p className="mt-3 text-xs text-slate-400">
                                    © {new Date().getFullYear()} Municipality of
                                    Estancia, Iloilo
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}
