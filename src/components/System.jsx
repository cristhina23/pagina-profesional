import { motion } from "framer-motion";
import { Section, Container } from "./ui/Layout";

export default function Systems() {
  return (
    <Section className="bg-background-dark overflow-visible">
      <Container>
        <div className="border border-white/10 bg-white/5 backdrop-blur-md rounded-lg p-10">
          
          {/* Header */}
          <div className="mb-12">
            <p className="text-[10px] font-mono uppercase tracking-widest text-white/40">
              System Status
            </p>
            <h2 className="font-display italic text-3xl">
              Core Modules Online
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SystemCard title="Performance Engine" value="99.8%" />
            <SystemCard title="Member Sync" value="24/7" />
            <SystemCard title="Security Layer" value="ACTIVE" />
          </div>

        </div>
      </Container>

      {/* Edge blend to smooth transitions (unified) */}
      <div className="absolute inset-x-0 -top-16 h-28 bg-gradient-to-b from-primary/12 via-primary/6 to-transparent opacity-60 pointer-events-none -z-10 mix-blend-screen" />
      <div className="absolute inset-x-0 -bottom-16 h-28 bg-gradient-to-t from-primary/12 via-primary/6 to-transparent opacity-60 pointer-events-none -z-10 mix-blend-screen" />
    </Section>
  );
}

function SystemCard({ title, value }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      className="border border-white/10 bg-background-light dark:bg-background-dark p-6 rounded-md"
    >
      <span className="text-[9px] font-mono uppercase tracking-widest text-white/30 block mb-3">
        {title}
      </span>

      <span className="font-display italic text-4xl">
        {value}
      </span>

      <div className="mt-4 h-[2px] w-full bg-white/10 overflow-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="h-full w-1/3 bg-primary"
        />
      </div>
    </motion.div>
  );
}
