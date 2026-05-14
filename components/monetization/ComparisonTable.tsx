import Link from "next/link";
import { CheckCircle2, XCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export interface ComparisonItem {
  name: string;
  bestFor: string;
  pricing: string;
  pros: string[];
  cons: string[];
  href: string;
}

interface ComparisonTableProps {
  items: ComparisonItem[];
  buttonText?: string;
}

export function ComparisonTable({
  items,
  buttonText = "Ver ferramenta",
}: ComparisonTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Produto</TableHead>
            <TableHead>Melhor para</TableHead>
            <TableHead>Preço</TableHead>
            <TableHead>Prós</TableHead>
            <TableHead>Contras</TableHead>
            <TableHead className="text-right">Link</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.name}>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell>{item.bestFor}</TableCell>
              <TableCell>{item.pricing}</TableCell>
              <TableCell>
                <ul className="space-y-1">
                  {item.pros.map((pro) => (
                    <li key={pro} className="flex gap-2 text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </TableCell>
              <TableCell>
                <ul className="space-y-1">
                  {item.cons.map((con) => (
                    <li key={con} className="flex gap-2 text-sm text-muted-foreground">
                      <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </TableCell>
              <TableCell className="text-right">
                <Button asChild size="sm" variant="outline">
                  <Link href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                    {buttonText}
                  </Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
