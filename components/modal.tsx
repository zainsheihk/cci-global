/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { HTMLProps } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { RxCross2 } from "react-icons/rx";
import { cn } from "@/utils/function";

const DialogDemo = ({
  triggerText,
  buttonClass,
  children,
}: {
  triggerText: string;
  children: any;
  buttonClass?: HTMLProps<HTMLElement>["className"];
}) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button
        className={cn(
          `bg-[var(--primary-color)] text-white py-2 px-6 text-[14px] font-semibold rounded-md hover:bg-[var(--secondary-color)] transition-all duration-500 `,
          buttonClass
        )}
      >
        {triggerText}
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black opacity-40 data-[state=open]:animate-overlayShow z-[99000]" />
      <Dialog.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white  shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow z-[99000]">
        {children}
        <Dialog.Title className="m-0 text-[17px] font-medium text-mauve12 hidden">
          Edit profile
        </Dialog.Title>
        {/* <Dialog.Title className="m-0 text-[17px] font-medium text-mauve12">
          Edit profile
        </Dialog.Title>
        <Dialog.Description className="mb-5 mt-2.5 text-[15px] leading-normal text-mauve11">
          Make changes to your profile here. Click save when you&apos;re done.
        </Dialog.Description> */}
        {/* <fieldset className="mb-[15px] flex items-center gap-5">
          <label
            className="w-[90px] text-right text-[15px] text-violet11"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="inline-flex h-[35px] w-full flex-1 items-center justify-center rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8"
            id="name"
            defaultValue="Pedro Duarte"
          />
        </fieldset>
        <fieldseta className="mb-[15px] flex items-center gap-5">
          <label
            className="w-[90px] text-right text-[15px] text-violet11"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="inline-flex h-[35px] w-full flex-1 items-center justify-center rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet8"
            id="username"
            defaultValue="@peduarte"
          />
        </fieldseta> */}
        {/* <div className="mt-[25px] flex justify-end">
          <Dialog.Close asChild>
            <button className="inline-flex h-[35px] items-center justify-center rounded bg-green4 px-[15px] font-medium leading-none text-green11 hover:bg-green5 focus:shadow-[0_0_0_2px] focus:shadow-green7 focus:outline-none">
              Save changes
            </button>
          </Dialog.Close>
        </div> */}
        <Dialog.Close asChild>
          <button
            className="absolute -right-2.5 -top-2.5 inline-flex size-[25px] appearance-none items-center justify-center rounded-full text-violet11 hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 focus:outline-none bg-white"
            aria-label="Close"
          >
            <RxCross2 />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default DialogDemo;
