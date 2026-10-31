import { Form, Head } from "@inertiajs/react";
import { Sprout, Fish, ShieldCheck, Tractor, ArrowRight } from "lucide-react";

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

            <div className="min-h-screen bg-slate-50 lg:grid lg:grid-cols-2">
                {/* Left branding panel */}
                <div className="relative hidden overflow-hidden bg-[#14532d] text-white lg:flex lg:flex-col lg:justify-between">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full border-[40px] border-white" />
                        <div className="absolute -bottom-40 -right-20 h-[500px] w-[500px] rounded-full border-[60px] border-white" />
                    </div>

                    <div className="relative z-10 p-12">
                        <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-green-800">
                                <Sprout size={27} />
                            </div>
                            <div>
                                <h1 className="text-lg font-bold tracking-wide">
                                    MUNICIPAL AGRICULTURE OFFICE
                                </h1>
                                <p className="text-xs text-green-100">
                                    Municipality of Estancia, Iloilo
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 max-w-xl px-12 pb-20">
                        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium">
                            <ShieldCheck size={15} />
                            Official MAO Management Portal
                        </span>

                        <h2 className="text-5xl leading-tight font-bold tracking-tight">
                            Growing Agriculture.
                            <br />
                            <span className="text-green-300">
                                Sustaining Fisheries.
                            </span>
                        </h2>

                        <p className="mt-6 max-w-md text-base leading-7 text-green-100">
                            An integrated digital platform for managing
                            agricultural programs, farmer records, fisheries
                            services, and municipal operations.
                        </p>

                        <div className="mt-12 grid grid-cols-2 gap-4">
                            <div className="rounded-xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                                <Tractor
                                    className="mb-3 text-green-300"
                                    size={26}
                                />
                                <h3 className="font-semibold">
                                    Farm Agriculture
                                </h3>
                                <p className="mt-1 text-xs text-green-100">
                                    Farmers, crops, production and assistance
                                </p>
                            </div>

                            <div className="rounded-xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                                <Fish className="mb-3 text-sky-300" size={26} />
                                <h3 className="font-semibold">Fisheries</h3>
                                <p className="mt-1 text-xs text-green-100">
                                    Fisherfolk, vessels and fisheries programs
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 px-12 pb-8 text-xs text-green-200">
                        © {new Date().getFullYear()} Municipality of Estancia,
                        Iloilo. All rights reserved.
                    </div>
                </div>

                {/* Login panel */}
                <div className="flex min-h-screen items-center justify-center px-6 py-12">
                    <div className="w-full max-w-md">
                        {/* Mobile branding */}
                        <div className="mb-10 flex items-center gap-3 lg:hidden">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-800 text-white">
                                <Sprout size={27} />
                            </div>
                            <div>
                                <h1 className="text-sm font-bold text-slate-900">
                                    MUNICIPAL AGRICULTURE OFFICE
                                </h1>
                                <p className="text-xs text-slate-500">
                                    Municipality of Estancia, Iloilo
                                </p>
                            </div>
                        </div>

                        <div className="mb-8">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-800">
                                <ShieldCheck size={25} />
                            </div>

                            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                                Welcome back
                            </h2>

                            <p className="mt-2 text-sm leading-6 text-slate-500">
                                Sign in to access the MAO Management System.
                                Enter your account credentials below.
                            </p>
                        </div>

                        {status && (
                            <div className="mb-5 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-800">
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
                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="email"
                                            className="text-slate-700"
                                        >
                                            Email address
                                        </Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            name="email"
                                            required
                                            autoFocus
                                            autoComplete="email"
                                            placeholder="name@example.com"
                                            className="h-12 rounded-lg border-slate-200 bg-white"
                                        />
                                        <InputError message={errors.email} />
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <Label
                                                htmlFor="password"
                                                className="text-slate-700"
                                            >
                                                Password
                                            </Label>

                                            {canResetPassword && (
                                                <TextLink
                                                    href={request()}
                                                    className="text-xs font-semibold text-green-700 hover:text-green-800"
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
                                            className="h-12 rounded-lg"
                                        />
                                        <InputError message={errors.password} />
                                    </div>

                                    <div className="flex items-center space-x-3">
                                        <Checkbox
                                            id="remember"
                                            name="remember"
                                        />
                                        <Label
                                            htmlFor="remember"
                                            className="text-sm font-normal text-slate-600"
                                        >
                                            Remember me
                                        </Label>
                                    </div>

                                    <Button
                                        type="submit"
                                        className="h-12 w-full rounded-lg bg-green-800 font-semibold text-white hover:bg-green-900"
                                        disabled={processing}
                                        data-test="login-button"
                                    >
                                        {processing ? (
                                            <>
                                                <Spinner />
                                                Signing in...
                                            </>
                                        ) : (
                                            <>
                                                Sign in to your account
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

                        <div className="mt-8 border-t border-slate-200 pt-6 text-center">
                            <p className="text-sm text-slate-500">
                                Don't have an account?{" "}
                                <TextLink
                                    href={register()}
                                    className="font-semibold text-green-700 hover:text-green-800"
                                >
                                    Create an account
                                </TextLink>
                            </p>
                        </div>

                        <div className="mt-8 text-center text-xs text-slate-400">
                            <p>Municipal Agriculture Office</p>
                            <p className="mt-1">
                                Estancia, Iloilo, Philippines
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

Login.layout = {
    title: "Sign in to MAO",
    description: "Municipal Agriculture Office Management System",
};
