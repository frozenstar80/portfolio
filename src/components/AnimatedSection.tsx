import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

type AnimatedSectionProps = PropsWithChildren<{
  id?: string;
  className?: string;
}>;

export const AnimatedSection = ({ id, className = "", children }: AnimatedSectionProps) => (
  <motion.section
    id={id}
    className={className}
    initial={{ opacity: 0, y: 26 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.18 }}
    transition={{ duration: 0.55, ease: "easeOut" }}
  >
    {children}
  </motion.section>
);
