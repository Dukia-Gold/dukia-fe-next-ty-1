"use client"

import { FC, useState } from "react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { Button } from "../ui/button";
import { ChevronsUpDown, Minus, Plus } from "lucide-react";

type FAQCompType = {
    title: string;
    content: string;
}

const FAQComp: FC<FAQCompType> = ({title, content}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full md:w-[40rem] lg:w-[52.875rem] bg-dukiaGrey text-dukiaBlue rounded-lg p-4 md:px-12 space-y-2"
    >
      <div className="flex items-center justify-between">
        <h4 className="font-medium">
          {title}
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <Plus className={`${isOpen ? "hidden" : "block"} w-5 h-5`} />
            <Minus className={`${isOpen ? "block" : "hidden"} w-5 h-5`} />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>

      <CollapsibleContent className="text-sm">
        {content}
      </CollapsibleContent>
    </Collapsible>
  )
}

export default FAQComp
