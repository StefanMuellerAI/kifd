interface TheseCardProps {
  number: string;
  title: string;
  summary: string;
}

export default function TheseCard({ number, title, summary }: TheseCardProps) {
  return (
    <div className="group relative bg-white border border-kifd-border rounded-lg p-6 hover:border-kifd-primary/30 hover:shadow-lg transition-all duration-300">
      <div className="flex items-start gap-4">
        <span className="these-number text-3xl font-black text-kifd-primary/20 group-hover:text-kifd-primary/40 transition-colors shrink-0">
          {number}
        </span>
        <div>
          <h3 className="font-bold text-kifd-dark text-lg mb-2">{title}</h3>
          <p className="text-kifd-text-muted text-sm leading-relaxed">
            {summary}
          </p>
        </div>
      </div>
    </div>
  );
}
