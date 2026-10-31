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
            <Head title="Municipal Agriculture Office" />

            <main className="min-h-screen bg-slate-50 lg:grid lg:grid-cols-2">
                {/* BRANDING PANEL */}
                <section className="relative hidden min-h-screen flex-col justify-between overflow-hidden bg-[#14532d] p-8 text-white md:flex md:p-10 lg:p-12 xl:p-16">
                    <div className="pointer-events-none absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full border-[65px] border-white/5" />
                    <div className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full border-[65px] border-white/5" />

                    <div className="relative z-10 flex items-center gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-green-800 xl:h-14 xl:w-14">
                            <Sprout size={29} />
                        </div>

                        <div>
                            <h1 className="text-sm font-extrabold tracking-wide xl:text-base">
                                MUNICIPAL AGRICULTURE OFFICE
                            </h1>
                            <p className="mt-1 text-xs text-green-200">
                                Municipality of Estancia, Iloilo
                            </p>
                        </div>
                    </div>

                    <div className="relative z-10 my-12 max-w-xl">
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-green-100">
                            <ShieldCheck size={15} />
                            Integrated Management System
                        </span>

                        <h2 className="mt-7 text-4xl leading-tight font-extrabold xl:text-6xl">
                            Empowering
                            <br />
                            <span className="text-green-300">Agriculture</span>
                            <br />
                            and Fisheries.
                        </h2>

                        <p className="mt-6 max-w-lg text-sm leading-7 text-green-100 md:text-base xl:text-lg">
                            A unified digital platform for agricultural
                            development, farmer services, fisheries management,
                            and municipal operations.
                        </p>

                        <div className="mt-10 grid grid-cols-2 gap-3 xl:gap-4">
                            <div className="rounded-xl border border-white/15 bg-white/10 p-4 xl:p-5">
                                <Tractor
                                    className="mb-4 text-green-300"
                                    size={27}
                                />
                                <h3 className="text-sm font-bold xl:text-base">
                                    Farm Agriculture
                                </h3>
                                <p className="mt-2 text-xs leading-5 text-green-100">
                                    Farmers, crops, production and assistance.
                                </p>
                            </div>

                            <div className="rounded-xl border border-white/15 bg-white/10 p-4 xl:p-5">
                                <Fish className="mb-4 text-sky-300" size={27} />
                                <h3 className="text-sm font-bold xl:text-base">
                                    Fisheries
                                </h3>
                                <p className="mt-2 text-xs leading-5 text-green-100">
                                    Fisherfolk, vessels, catch and programs.
                                </p>
                            </div>
                        </div>
                    </div>

                    <p className="relative z-10 text-xs text-green-200">
                        © {new Date().getFullYear()} Municipality of Estancia,
                        Iloilo
                    </p>
                </section>

                {/* LOGIN PANEL */}
                <section className="flex min-h-screen items-center justify-center px-5 py-10 sm:px-8 md:px-10 lg:px-8 xl:px-16">
                    <div className="w-full max-w-[420px]">
                        {/* Login card - no logo, no heading, no intro */}
                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-8 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none">
                            {status && (
                                <div className="mb-6 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
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
                                                className="h-12 rounded-lg border-slate-200 bg-white px-4"
                                            />

                                            <InputError
                                                message={errors.email}
                                            />
                                        </div>

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

                                            <InputError
                                                message={errors.password}
                                            />
                                        </div>

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

                                        <Button
                                            type="submit"
                                            disabled={processing}
                                            data-test="login-button"
                                            className="h-12 w-full rounded-lg bg-green-800 font-semibold text-white shadow-md shadow-green-900/10 transition hover:bg-green-900"
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

                            <div className="mt-7 border-t border-slate-200 pt-6 text-center">
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

                        {/* Mobile and tablet identity */}
                        <div className="mt-7 flex items-center justify-center gap-5 md:hidden">
                            <div className="flex items-center gap-2 text-xs font-semibold text-green-800">
                                <Tractor size={16} />
                                Agriculture
                            </div>

                            <div className="h-4 w-px bg-slate-300" />

                            <div className="flex items-center gap-2 text-xs font-semibold text-sky-700">
                                <Fish size={16} />
                                Fisheries
                            </div>
                        </div>

                        <p className="mt-8 text-center text-xs text-slate-400">
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
    title: "Municipal Agriculture Office",
    description: "MAO Management System",
};
