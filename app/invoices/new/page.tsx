import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button";
import { CirclePlus } from 'lucide-react';
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center text-center gap-6 items-center max-w-5xl w-full h-full mx-auto my-12">
        <div className="w-full flex items-center justify-between">
            <h1 className="text-3xl font-bold">Create Invoices</h1>
        </div>

        <form>
            <div>
                <label>Billing Name</label>
                <input type="text" />
            </div>
            <div>
                <label>Billing Email</label>
                <input type="email" />
            </div>
            <div>
                <label>Value</label>
                <input type="text" />
            </div>
            <div>
                <label>Description</label>
                <textarea />
            </div>
        </form>
    </main>
  );
}
