import { Form, Head } from "@inertiajs/react";
import { Sprout, Fish, Tractor, ArrowRight } from "lucide-react";

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
            <Head title="MAO | Estancia, Iloilo" />

            <main className="min-h-screen w-full overflow-x-hidden bg-slate-50 lg:grid lg:grid-cols-2">
                {/* DESKTOP BRANDING PANEL */}
                <section className="relative hidden min-h-screen overflow-hidden bg-[#14532d] p-10 text-white lg:flex lg:flex-col lg:justify-between xl:p-14">
                    <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border-[70px] border-white/5" />

                    <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full border-[70px] border-white/5" />

                    <div className="relative z-10 flex items-center gap-4">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-green-800">
                            <Sprout size={30} />
                        </div>

                        <div>
                            <h1 className="text-base font-extrabold tracking-wide">
                                MUNICIPAL AGRICULTURE OFFICE
                            </h1>
                            <p className="mt-1 text-sm text-green-200">
                                Municipality of Estancia, Iloilo
                            </p>
                        </div>
                    </div>

                    <div className="relative z-10 my-12 max-w-xl">
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-green-100">
                            <span className="h-2 w-2 rounded-full bg-green-300" />
                            Integrated Municipal Platform
                        </span>

                        <h2 className="mt-8 text-5xl leading-[1.15] font-extrabold xl:text-6xl">
                            Empowering
                            <br />
                            <span className="text-green-300">Agriculture</span>
                            <br />
                            and Fisheries.
                        </h2>

                        <p className="mt-7 max-w-lg text-base leading-8 text-green-100">
                            Connecting farmers, fisherfolk, agricultural
                            programs, and fisheries services through one
                            integrated municipal platform.
                        </p>

                        <div className="mt-12 grid grid-cols-2 gap-4">
                            <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
                                <Tractor
                                    size={30}
                                    className="mb-5 text-green-300"
                                />
                                <h3 className="font-bold">Farm Agriculture</h3>
                                <p className="mt-2 text-sm leading-6 text-green-100">
                                    Farmer registry, crop monitoring, production
                                    and assistance.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
                                <Fish size={30} className="mb-5 text-sky-300" />
                                <h3 className="font-bold">Fisheries</h3>
                                <p className="mt-2 text-sm leading-6 text-green-100">
                                    Fisherfolk registry, vessels, catch
                                    monitoring and programs.
                                </p>
                            </div>
                        </div>
                    </div>

                    <p className="relative z-10 text-xs text-green-200">
                        © {new Date().getFullYear()} Municipality of Estancia,
                        Iloilo
                    </p>
                </section>

                {/* LOGIN SECTION */}
                <section className="flex min-h-screen w-full min-w-0 items-center justify-center px-4 py-8 sm:px-8 md:px-12 lg:px-10 xl:px-16">
                    <div className="w-full max-w-[420px] min-w-0">
                        {/* LOGIN FORM CARD */}
                        <div className="w-full rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/50 sm:p-8 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none">
                            {status && (
                                <div className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-800">
                                    {status}
                                </div>
                            )}

                            <Form
                                {...store.form()}
                                resetOnSuccess={["password"]}
                                className="w-full space-y-5"
                            >
                                {({ processing, errors }) => (
                                    <>
                                        {/* EMAIL */}
                                        <div className="grid gap-2">
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
                                                className="h-12 w-full min-w-0 rounded-lg border-slate-200 bg-white px-4"
                                            />

                                            <InputError
                                                message={errors.email}
                                            />
                                        </div>

                                        {/* PASSWORD */}
                                        <div className="grid gap-2">
                                            <div className="flex flex-wrap items-center justify-between gap-2">
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

                                        {/* REMEMBER ME */}
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

                                        {/* LOGIN BUTTON */}
                                        <Button
                                            type="submit"
                                            disabled={processing}
                                            data-test="login-button"
                                            className="h-12 w-full rounded-lg bg-green-800 font-semibold text-white transition hover:bg-green-900"
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

                            {/* REGISTER */}
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

                        {/* MOBILE / TABLET MODULE INDICATORS */}
                        <div className="mt-7 flex items-center justify-center gap-6 lg:hidden">
                            <div className="flex items-center gap-2 text-xs font-semibold text-green-800">
                                <Tractor size={17} />
                                Agriculture
                            </div>

                            <div className="h-4 w-px bg-slate-300" />

                            <div className="flex items-center gap-2 text-xs font-semibold text-sky-700">
                                <Fish size={17} />
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
