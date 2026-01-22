import { motion } from "framer-motion";
import { Section, Container } from "./ui/Layout";
import { Button } from "./ui/Button";

export default function Contact() {
  return (
    <Section className="bg-background-dark">
      <Container>
        {/* MAP + RADAR */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative w-full h-[520px] bg-white/5 overflow-hidden rounded-lg border border-white/10 backdrop-blur-md"
        >
          <iframe
            title="Ubicación"
            src="https://www.google.com/maps?q=742+Performance+Way+Manhattan+NY+10001&output=embed"
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
          />

          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #D9FF00 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            />
          </div>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 pointer-events-none bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(217,255,0,0.2)_360deg)] -m-[50%]"
          />

          <div className="absolute top-4 left-4 bg-background-light dark:bg-background-dark border border-slate-300 dark:border-white/20 p-2">
            <p className="text-[8px] font-mono uppercase text-slate-400 dark:text-white/40">
              Main Grid Terminal
            </p>
            <p className="text-[10px] font-display italic">
              GENESIS HQ / NY
            </p>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 rounded-full animate-ping" />
              <div className="relative bg-primary p-2 rounded-full shadow-[0_0_20px_#D9FF00]">
                <span className="material-symbols-outlined text-black text-xl">
                  location_on
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FORM */}
        <form className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/5 border border-white/10 p-8 rounded-lg backdrop-blur-md">
          <div>
            <label className="block text-[10px] font-mono uppercase mb-2 text-white/40">
              Name
            </label>
            <input
              type="text"
              className="w-full bg-transparent border border-white/10 px-4 py-3 text-white outline-none focus:border-primary"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-[10px] font-mono uppercase mb-2 text-white/40">
              Email
            </label>
            <input
              type="email"
              className="w-full bg-transparent border border-white/10 px-4 py-3 text-white outline-none focus:border-primary"
              placeholder="you@email.com"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-[10px] font-mono uppercase mb-2 text-white/40">
              Message
            </label>
            <textarea
              rows="4"
              className="w-full bg-transparent border border-white/10 px-4 py-3 text-white outline-none focus:border-primary resize-none"
              placeholder="Write your message..."
            />
          </div>

          <div className="md:col-span-2">
            <Button className="w-full py-4">Send Transmission</Button>
          </div>
        </form>

        {/* CONTACT INFO */}
        <div className="space-y-12 mt-16">
          <ContactItem
            icon="call"
            label="Secure Voice Line"
            value="+1 555-000-FIT"
          />
          <ContactItem
            icon="mail"
            label="Encrypted Transmission"
            value="elite@fitclub.com"
            isEmail
          />
          <ContactItem
            icon="location_on"
            label="Physical Sector"
            value="742 Performance Way, Manhattan, NY 10001"
          />
        </div>

        {/* CTA */}
        <div className="mt-16 pt-12 border-t border-slate-300 dark:border-white/10 flex flex-col gap-6">
          <Button className="w-full py-5">Book a Site Tour</Button>
          <button className="w-full flex items-center justify-center gap-2 text-slate-400 dark:text-white/40 font-mono text-[10px] uppercase tracking-widest hover:text-white transition-colors">
            Download Protocol PDF
            <span className="material-symbols-outlined text-sm">
              download
            </span>
          </button>
        </div>
      </Container>
    </Section>
  );
}

function ContactItem({ icon, label, value, isEmail = false }) {
  return (
    <div>
      <span className="text-[8px] font-mono text-slate-400 dark:text-white/30 uppercase tracking-widest block mb-4">
        — {label}
      </span>

      <div className="flex items-center gap-4 group cursor-pointer">
        <div className="w-12 h-12 flex items-center justify-center border border-slate-300 dark:border-white/10 group-hover:border-primary transition-colors">
          <span className="material-symbols-outlined text-primary">
            {icon}
          </span>
        </div>

        <span
          className={`font-display italic ${
            isEmail ? "text-xl lowercase" : "text-2xl"
          }`}
        >
          {value}
        </span>
      </div>
    </div>
  );
}
