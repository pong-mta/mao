import { Head, Link, usePage } from "@inertiajs/react";
import { dashboard, login, register } from "@/routes";
import {
    ArrowRight,
    ArrowUpRight,
    Anchor,
    Sprout,
    Fish,
    Tractor,
    Ship,
    MapPin,
    Newspaper,
    CalendarDays,
    Users,
    Leaf,
    Waves,
    ShieldCheck,
    FileText,
    Menu,
    X,
    ChevronRight,
    Phone,
    Mail,
    Clock,
    Globe2,
} from "lucide-react";
import { useState } from "react";

const farmServices = [
    {
        icon: Sprout,
        title: "Crop Production",
        description:
            "Agricultural development, crop monitoring, and production assistance.",
    },
    {
        icon: Tractor,
        title: "Farm Assistance",
        description:
            "Access information about seeds, fertilizers, machinery, and government programs.",
    },
    {
        icon: Users,
        title: "Farmer Registration",
        description:
            "Farmer profiling, farm information, and agricultural registry services.",
    },
];

const fisheriesServices = [
    {
        icon: Fish,
        title: "Fisherfolk Services",
        description:
            "Registration, profiling, and support for municipal fisherfolk.",
    },
    {
        icon: Ship,
        title: "Fishing Vessel Registry",
        description:
            "Information and registration services for municipal fishing vessels.",
    },
    {
        icon: Waves,
        title: "Fisheries Development",
        description:
            "Sustainable fisheries, aquaculture, and coastal resource development.",
    },
];

const announcements = [
    {
        category: "AGRICULTURE",
        title: "Agricultural Programs and Farmer Assistance",
        description:
            "Stay informed about available agricultural support programs and services for local farmers.",
        date: "MAO Announcement",
        color: "bg-green-100 text-green-800",
    },
    {
        category: "FISHERIES",
        title: "Fisheries Development and Fisherfolk Services",
        description:
            "Updates on fisheries programs, municipal fishing activities, and support for local fisherfolk.",
        date: "MAO Announcement",
        color: "bg-blue-100 text-blue-800",
    },
    {
        category: "PUBLIC ADVISORY",
        title: "Agriculture and Fisheries Information",
        description:
            "Important information, public notices, and advisories from the Municipal Agriculture Office.",
        date: "Public Information",
        color: "bg-amber-100 text-amber-800",
    },
];

export default function Welcome() {
    const { auth } = usePage().props as any;
    const [mobileMenu, setMobileMenu] = useState(false);

    const navigation = [
        { label: "Home", href: "#home" },
        { label: "About Us", href: "#about" },
        { label: "Farm Agriculture", href: "#farm" },
        { label: "Fisheries", href: "#fisheries" },
        { label: "Programs", href: "#programs" },
        { label: "Contact", href: "#contact" },
    ];

    return (
        <>
            <Head title="Municipal Agriculture Office | Estancia, Iloilo">
                <meta
                    name="description"
                    content="Official Municipal Agriculture Office of Estancia, Iloilo. Agriculture, fisheries, farmer services, fisherfolk programs and municipal agricultural development."
                />
            </Head>

            <div className="min-h-screen bg-white font-sans text-slate-800">
                {/* TOP INFORMATION BAR */}
                <div className="hidden bg-[#123D2A] text-white md:block">
                    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">
                        <div className="flex items-center gap-5">
                            <span className="flex items-center gap-2">
                                <MapPin size={13} />
                                Estancia, Iloilo, Philippines
                            </span>
                            <span className="flex items-center gap-2">
                                <Clock size={13} />
                                Municipal Agriculture Office
                            </span>
                        </div>

                        <span className="flex items-center gap-2 text-green-200">
                            <Globe2 size={13} />
                            Serving the Farming and Fishing Community
                        </span>
                    </div>
                </div>

                {/* NAVIGATION */}
                <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur-xl">
                    <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-6">
                        <a href="#home" className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#176B3A] text-white shadow-lg shadow-green-900/15">
                                <Sprout size={27} />
                            </div>

                            <div>
                                <h1 className="text-sm font-black tracking-tight text-[#174B31] sm:text-base">
                                    MUNICIPAL AGRICULTURE
                                </h1>
                                <p className="text-[10px] font-bold tracking-[0.2em] text-slate-500">
                                    OFFICE · ESTANCIA, ILOILO
                                </p>
                            </div>
                        </a>

                        <nav className="hidden items-center gap-7 lg:flex">
                            {navigation.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="text-sm font-semibold text-slate-600 transition hover:text-[#176B3A]"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>

                        <div className="hidden items-center gap-3 lg:flex">
                            {auth.user ? (
                                <Link
                                    href={dashboard()}
                                    className="flex items-center gap-2 rounded-lg bg-[#176B3A] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#10532B]"
                                >
                                    Dashboard
                                    <ArrowRight size={16} />
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={login()}
                                        className="rounded-lg px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-100"
                                    >
                                        Staff Login
                                    </Link>
                                    <Link
                                        href={register()}
                                        className="flex items-center gap-2 rounded-lg bg-[#176B3A] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-green-900/10 transition hover:bg-[#10532B]"
                                    >
                                        Get Started
                                        <ArrowRight size={16} />
                                    </Link>
                                </>
                            )}
                        </div>

                        <button
                            onClick={() => setMobileMenu(!mobileMenu)}
                            className="rounded-lg border border-slate-200 p-2 text-slate-700 lg:hidden"
                            aria-label="Toggle navigation"
                        >
                            {mobileMenu ? <X size={23} /> : <Menu size={23} />}
                        </button>
                    </div>

                    {mobileMenu && (
                        <div className="border-t border-slate-100 bg-white px-5 py-5 lg:hidden">
                            <nav className="flex flex-col gap-1">
                                {navigation.map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        onClick={() => setMobileMenu(false)}
                                        className="rounded-lg px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-green-50 hover:text-green-800"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                                <Link
                                    href={auth.user ? dashboard() : login()}
                                    className="mt-3 rounded-lg bg-[#176B3A] px-4 py-3 text-center text-sm font-bold text-white"
                                >
                                    {auth.user
                                        ? "Open Dashboard"
                                        : "Staff Login"}
                                </Link>
                            </nav>
                        </div>
                    )}
                </header>

                {/* HERO SECTION */}
                <section
                    id="home"
                    className="relative flex min-h-[650px] items-center overflow-hidden bg-[#102D21]"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2200&q=85')",
                        }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-[#092719]/95 via-[#0D3525]/80 to-[#0B2E25]/35" />

                    <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-32">
                        <div className="max-w-3xl">
                            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold tracking-wider text-green-100 backdrop-blur-md">
                                <span className="h-2 w-2 rounded-full bg-green-400" />
                                MUNICIPAL GOVERNMENT OF ESTANCIA
                            </div>

                            <h2 className="text-4xl leading-[1.12] font-black tracking-tight text-white sm:text-5xl lg:text-7xl">
                                Growing Our
                                <span className="block text-[#A8D98C]">
                                    Land.
                                </span>
                                <span className="block">Sustaining Our</span>
                                <span className="block text-[#8DD4E8]">
                                    Seas.
                                </span>
                            </h2>

                            <p className="mt-7 max-w-xl text-base leading-8 text-green-50/85 sm:text-lg">
                                Empowering farmers and fisherfolk through
                                sustainable agriculture, responsible fisheries,
                                innovation, and accessible municipal services.
                            </p>

                            <div className="mt-9 flex flex-wrap gap-4">
                                <a
                                    href="#farm"
                                    className="flex items-center gap-3 rounded-lg bg-[#75B94C] px-6 py-4 text-sm font-extrabold text-white shadow-xl transition hover:bg-[#62A63A]"
                                >
                                    Explore Our Services
                                    <ArrowRight size={18} />
                                </a>

                                <a
                                    href="#about"
                                    className="flex items-center gap-3 rounded-lg border border-white/30 bg-white/10 px-6 py-4 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
                                >
                                    Learn About MAO
                                </a>
                            </div>

                            <div className="mt-12 flex flex-wrap gap-8 border-t border-white/20 pt-7">
                                <div>
                                    <div className="flex items-center gap-2 text-white">
                                        <Sprout
                                            size={19}
                                            className="text-green-300"
                                        />
                                        <span className="font-bold">
                                            Agriculture
                                        </span>
                                    </div>
                                    <p className="mt-1 text-xs text-green-100/70">
                                        Supporting local farmers
                                    </p>
                                </div>

                                <div>
                                    <div className="flex items-center gap-2 text-white">
                                        <Fish
                                            size={19}
                                            className="text-sky-300"
                                        />
                                        <span className="font-bold">
                                            Fisheries
                                        </span>
                                    </div>
                                    <p className="mt-1 text-xs text-green-100/70">
                                        Empowering local fisherfolk
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* HERO FEATURE CARD */}
                        <div className="hidden lg:block">
                            <div className="ml-auto max-w-sm rounded-2xl border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-xl">
                                <div className="relative h-64 overflow-hidden rounded-xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=900&q=85"
                                        alt="Agricultural landscape"
                                        className="h-full w-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                    <div className="absolute bottom-5 left-5 text-white">
                                        <span className="text-xs font-bold tracking-widest text-green-300">
                                            OUR COMMITMENT
                                        </span>
                                        <h3 className="mt-2 text-2xl font-black">
                                            Sustainable
                                            <br />
                                            Development
                                        </h3>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3 p-3">
                                    <div className="rounded-lg bg-white/10 p-4">
                                        <Sprout
                                            className="mb-3 text-green-300"
                                            size={25}
                                        />
                                        <p className="text-sm font-bold text-white">
                                            Farm Sector
                                        </p>
                                        <p className="mt-1 text-xs text-green-100/70">
                                            Agriculture
                                        </p>
                                    </div>
                                    <div className="rounded-lg bg-white/10 p-4">
                                        <Waves
                                            className="mb-3 text-sky-300"
                                            size={25}
                                        />
                                        <p className="text-sm font-bold text-white">
                                            Sea Sector
                                        </p>
                                        <p className="mt-1 text-xs text-green-100/70">
                                            Fisheries
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-0 left-0 h-1.5 w-full bg-gradient-to-r from-green-600 via-green-300 to-sky-400" />
                </section>

                {/* INTRODUCTION */}
                <section id="about" className="bg-white py-24">
                    <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center">
                        <div>
                            <span className="text-xs font-black tracking-[0.2em] text-[#37834D]">
                                ABOUT OUR OFFICE
                            </span>

                            <h2 className="mt-5 text-3xl leading-tight font-black tracking-tight text-[#173D2B] sm:text-4xl">
                                Serving the People Who Feed and Sustain Our
                                Community.
                            </h2>

                            <p className="mt-6 leading-8 text-slate-600">
                                The Municipal Agriculture Office of Estancia,
                                Iloilo supports the development of the
                                municipality's agricultural and fisheries
                                sectors. Through programs, technical assistance,
                                monitoring, and community engagement, the office
                                works to strengthen local livelihoods and
                                promote sustainable resource management.
                            </p>

                            <p className="mt-4 leading-8 text-slate-600">
                                Our commitment extends from the farms to the
                                fishing grounds, ensuring that our farmers and
                                fisherfolk have access to information,
                                opportunities, and government services.
                            </p>

                            <a
                                href="#programs"
                                className="mt-8 inline-flex items-center gap-3 font-bold text-[#176B3A] hover:gap-5"
                            >
                                Discover our programs
                                <ArrowRight size={18} />
                            </a>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4 pt-10">
                                <img
                                    src="https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=700&q=80"
                                    alt="Agricultural farmland"
                                    className="h-64 w-full rounded-2xl object-cover shadow-lg"
                                />
                                <div className="rounded-2xl bg-[#176B3A] p-6 text-white">
                                    <Sprout size={32} />
                                    <h3 className="mt-4 font-bold">
                                        Farm Agriculture
                                    </h3>
                                    <p className="mt-2 text-sm text-green-100">
                                        Developing productive and resilient
                                        farms.
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="rounded-2xl bg-[#087EAA] p-6 text-white">
                                    <Waves size={32} />
                                    <h3 className="mt-4 font-bold">
                                        Fisheries
                                    </h3>
                                    <p className="mt-2 text-sm text-sky-100">
                                        Supporting sustainable marine
                                        livelihoods.
                                    </p>
                                </div>
                                <img
                                    src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=700&q=80"
                                    alt="Ocean and coastal environment"
                                    className="h-64 w-full rounded-2xl object-cover shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* FARM AGRICULTURE */}
                <section id="farm" className="bg-[#F2F7F0] py-24">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
                            <div className="max-w-2xl">
                                <span className="text-xs font-black tracking-[0.2em] text-green-700">
                                    SECTOR 01 · FARM
                                </span>
                                <h2 className="mt-4 text-3xl font-black tracking-tight text-[#174B31] sm:text-4xl">
                                    Farm Agriculture
                                </h2>
                                <p className="mt-4 leading-7 text-slate-600">
                                    Promoting agricultural productivity,
                                    supporting farmers, and building a resilient
                                    farming community in Estancia.
                                </p>
                            </div>

                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 font-bold text-green-800"
                            >
                                Agriculture Information
                                <ArrowUpRight size={18} />
                            </a>
                        </div>

                        <div className="mt-12 grid gap-6 md:grid-cols-3">
                            {farmServices.map((service, index) => {
                                const Icon = service.icon;

                                return (
                                    <div
                                        key={service.title}
                                        className="group rounded-2xl border border-green-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                                    >
                                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-green-800 transition group-hover:bg-[#176B3A] group-hover:text-white">
                                            <Icon size={28} />
                                        </div>

                                        <span className="mt-7 block text-xs font-bold text-green-700">
                                            FARM SERVICE 0{index + 1}
                                        </span>

                                        <h3 className="mt-3 text-xl font-extrabold text-slate-800">
                                            {service.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-7 text-slate-500">
                                            {service.description}
                                        </p>

                                        <a
                                            href="#contact"
                                            className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-green-800 transition group-hover:gap-4"
                                        >
                                            Learn More
                                            <ChevronRight size={17} />
                                        </a>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* FISHERIES */}
                <section
                    id="fisheries"
                    className="relative overflow-hidden bg-[#082F45] py-24 text-white"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-20"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=2000&q=80')",
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#082F45] via-[#0A4059]/95 to-[#082F45]/80" />

                    <div className="relative mx-auto max-w-7xl px-6">
                        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
                            <div className="max-w-2xl">
                                <span className="text-xs font-black tracking-[0.2em] text-sky-300">
                                    SECTOR 02 · SEA
                                </span>
                                <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                                    Fisheries & Marine Resources
                                </h2>
                                <p className="mt-4 leading-7 text-sky-100/80">
                                    Supporting our fishing communities,
                                    developing responsible fisheries, and
                                    protecting the marine resources that sustain
                                    Estancia.
                                </p>
                            </div>

                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 font-bold text-sky-300"
                            >
                                Fisheries Information
                                <ArrowUpRight size={18} />
                            </a>
                        </div>

                        <div className="mt-12 grid gap-6 md:grid-cols-3">
                            {fisheriesServices.map((service, index) => {
                                const Icon = service.icon;

                                return (
                                    <div
                                        key={service.title}
                                        className="group rounded-2xl border border-white/10 bg-white/[0.07] p-8 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:bg-white/[0.13]"
                                    >
                                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-sky-400/15 text-sky-300 transition group-hover:bg-sky-400 group-hover:text-white">
                                            <Icon size={28} />
                                        </div>

                                        <span className="mt-7 block text-xs font-bold text-sky-300">
                                            FISHERIES SERVICE 0{index + 1}
                                        </span>

                                        <h3 className="mt-3 text-xl font-extrabold text-white">
                                            {service.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-7 text-sky-100/70">
                                            {service.description}
                                        </p>

                                        <a
                                            href="#contact"
                                            className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-sky-300 transition group-hover:gap-4"
                                        >
                                            Learn More
                                            <ChevronRight size={17} />
                                        </a>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* PROGRAMS */}
                <section id="programs" className="bg-white py-24">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="mx-auto max-w-2xl text-center">
                            <span className="text-xs font-black tracking-[0.2em] text-green-700">
                                INFORMATION CENTER
                            </span>
                            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#174B31] sm:text-4xl">
                                Programs, News & Announcements
                            </h2>
                            <p className="mt-4 leading-7 text-slate-500">
                                Stay updated with the latest programs, services,
                                and announcements from the Municipal Agriculture
                                Office.
                            </p>
                        </div>

                        <div className="mt-12 grid gap-7 md:grid-cols-3">
                            {announcements.map((item) => (
                                <article
                                    key={item.title}
                                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
                                >
                                    <div className="flex h-2 bg-gradient-to-r from-green-600 to-sky-500" />
                                    <div className="p-7">
                                        <div className="flex items-center justify-between gap-3">
                                            <span
                                                className={`rounded-md px-3 py-1.5 text-[10px] font-black tracking-wider ${item.color}`}
                                            >
                                                {item.category}
                                            </span>
                                            <Newspaper
                                                size={19}
                                                className="text-slate-300"
                                            />
                                        </div>

                                        <h3 className="mt-6 text-xl leading-snug font-extrabold text-slate-800">
                                            {item.title}
                                        </h3>

                                        <p className="mt-4 text-sm leading-7 text-slate-500">
                                            {item.description}
                                        </p>

                                        <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
                                            <span className="text-xs text-slate-400">
                                                {item.date}
                                            </span>
                                            <ArrowUpRight
                                                size={18}
                                                className="text-green-700"
                                            />
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* DIGITAL SERVICES CTA */}
                <section className="bg-[#F3F7F4] py-20">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="relative overflow-hidden rounded-3xl bg-[#176B3A] px-8 py-14 text-white md:px-16">
                            <div className="absolute -right-16 -top-24 h-80 w-80 rounded-full border-[40px] border-white/5" />
                            <div className="absolute -bottom-32 right-48 h-72 w-72 rounded-full border-[35px] border-white/5" />

                            <div className="relative flex flex-col items-start justify-between gap-9 md:flex-row md:items-center">
                                <div className="max-w-2xl">
                                    <span className="text-xs font-black tracking-[0.2em] text-green-200">
                                        MUNICIPAL AGRICULTURE SERVICES
                                    </span>
                                    <h2 className="mt-5 text-3xl leading-tight font-black sm:text-4xl">
                                        Bringing Government Services Closer to
                                        Our Communities.
                                    </h2>
                                    <p className="mt-5 leading-7 text-green-50/80">
                                        Access information about agricultural
                                        and fisheries services, registration,
                                        and municipal assistance programs.
                                    </p>
                                </div>

                                <div className="flex shrink-0 flex-wrap gap-3">
                                    <Link
                                        href={register()}
                                        className="flex items-center gap-2 rounded-lg bg-white px-6 py-4 text-sm font-extrabold text-green-900 transition hover:bg-green-50"
                                    >
                                        Register Now
                                        <ArrowRight size={17} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CONTACT */}
                <section id="contact" className="bg-white py-20">
                    <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2">
                        <div>
                            <span className="text-xs font-black tracking-[0.2em] text-green-700">
                                GET IN TOUCH
                            </span>
                            <h2 className="mt-4 text-3xl font-black text-[#174B31]">
                                Municipal Agriculture Office
                            </h2>
                            <p className="mt-5 max-w-lg leading-8 text-slate-500">
                                For inquiries about agricultural programs,
                                farmer services, fisheries assistance, and
                                municipal agriculture activities, contact our
                                office.
                            </p>

                            <div className="mt-8 space-y-5">
                                <div className="flex items-center gap-4">
                                    <div className="rounded-xl bg-green-100 p-3 text-green-800">
                                        <MapPin size={22} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-800">
                                            Office Location
                                        </p>
                                        <p className="text-sm text-slate-500">
                                            Municipality of Estancia, Iloilo
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="rounded-xl bg-green-100 p-3 text-green-800">
                                        <Phone size={22} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-800">
                                            Telephone
                                        </p>
                                        <p className="text-sm text-slate-500">
                                            Contact through the Municipal
                                            Government
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="rounded-xl bg-green-100 p-3 text-green-800">
                                        <Mail size={22} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-800">
                                            Email
                                        </p>
                                        <p className="text-sm text-slate-500">
                                            Official MAO contact information
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative min-h-[320px] overflow-hidden rounded-2xl bg-[#E7F0E9]">
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                                <div className="rounded-full bg-white p-5 text-green-800 shadow-lg">
                                    <MapPin size={34} />
                                </div>
                                <h3 className="mt-5 text-xl font-black text-[#174B31]">
                                    Estancia, Iloilo
                                </h3>
                                <p className="mt-2 text-sm text-slate-600">
                                    Municipal Agriculture Office
                                </p>
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=Estancia%2C+Iloilo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#176B3A] px-5 py-3 text-sm font-bold text-white hover:bg-green-800"
                                >
                                    View Location
                                    <ArrowUpRight size={16} />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FOOTER */}
                <footer className="bg-[#102D21] text-white">
                    <div className="mx-auto max-w-7xl px-6 py-14">
                        <div className="grid gap-12 md:grid-cols-3">
                            <div>
                                <div className="flex items-center gap-3">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-600">
                                        <Sprout size={27} />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-black">
                                            MUNICIPAL AGRICULTURE OFFICE
                                        </h3>
                                        <p className="text-xs text-green-200">
                                            Estancia, Iloilo
                                        </p>
                                    </div>
                                </div>

                                <p className="mt-6 max-w-sm text-sm leading-7 text-green-100/65">
                                    Serving the agricultural and fisheries
                                    communities of Estancia through sustainable
                                    development, public service, and innovation.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-extrabold">Quick Links</h3>
                                <div className="mt-5 grid grid-cols-2 gap-4 text-sm text-green-100/70">
                                    <a
                                        href="#about"
                                        className="hover:text-white"
                                    >
                                        About Us
                                    </a>
                                    <a
                                        href="#farm"
                                        className="hover:text-white"
                                    >
                                        Farm Agriculture
                                    </a>
                                    <a
                                        href="#fisheries"
                                        className="hover:text-white"
                                    >
                                        Fisheries
                                    </a>
                                    <a
                                        href="#programs"
                                        className="hover:text-white"
                                    >
                                        Programs
                                    </a>
                                    <a
                                        href="#contact"
                                        className="hover:text-white"
                                    >
                                        Contact
                                    </a>
                                    <Link
                                        href={login()}
                                        className="hover:text-white"
                                    >
                                        Staff Login
                                    </Link>
                                </div>
                            </div>

                            <div>
                                <h3 className="font-extrabold">
                                    Our Commitment
                                </h3>
                                <p className="mt-5 text-sm leading-7 text-green-100/70">
                                    Supporting farmers. Empowering fisherfolk.
                                    Protecting our resources. Building a
                                    sustainable future for Estancia.
                                </p>
                            </div>
                        </div>

                        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/10 pt-7 text-xs text-green-100/50 md:flex-row">
                            <p>
                                © {new Date().getFullYear()} Municipal
                                Agriculture Office – Estancia, Iloilo.
                            </p>
                            <p>
                                Powered by the Municipal Government of Estancia.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
