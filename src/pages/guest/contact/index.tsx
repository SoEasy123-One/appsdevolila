import { Mail, MapPin, Link2, ArrowUpRight } from "lucide-react";

const contactInfo = [
  { label: "Email", value: "pauljohnolila@gmail.com", icon: Mail, href: "mailto:pauljohnolila@gmail.com" },
  { label: "Location", value: "Buagsong, Cordova, Cebu, Philippines", icon: MapPin },
  { label: "GitHub", value: "github.com/SoEasy123-One", icon: Link2, href: "https://github.com/SoEasy123-One" },
  { label: "LinkedIn", value: "linkedin.com/in/paul-john", icon: Link2, href: "https://linkedin.com/in/paul-john" },
];

export default function ContactPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

        {/* Left intro panel */}
        <div className="lg:col-span-2">
          <span className="text-xs font-semibold tracking-widest text-orange-600 uppercase">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 mb-4 leading-tight">
            Let's build something together.
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Whether it's a project, a question, or just a hello — my inbox is open.
          </p>

          <a
            href="mailto:pauljohnolila@gmail.com"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-gray-900 text-white rounded-full text-sm font-semibold hover:bg-orange-600 transition-colors"
          >
            Send a message
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Right list of contact methods */}
        <div className="lg:col-span-3 flex flex-col gap-3">
          {contactInfo.map((item) => {
            const Icon = item.icon;
            const content = (
              <div className="flex items-center gap-4 p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white group cursor-pointer">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-50 text-orange-600 shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-400">{item.label}</p>
                  <p className="text-sm font-medium text-gray-900 truncate group-hover:text-orange-600 transition-colors">
                    {item.value}
                  </p>
                </div>
              </div>
            );

            return item.href ? (
              <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">
                {content}
              </a>
            ) : (
              <div key={item.label}>{content}</div>
            );
          })}
        </div>

      </div>
    </section>
  );
}