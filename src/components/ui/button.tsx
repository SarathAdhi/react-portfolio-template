import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@utils/cn";
import { Slot } from "@radix-ui/react-slot";

const buttonVariants = cva(
  "inline-flex items-center px-4 py-2 text-xs text-center transition duration-500 ease-in-out transform rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-300",
  {
    variants: {
      variant: {
        default:
          "text-primary-950 bg-gradient-to-tr from-secondary-500 via-secondary-400 to-secondary-300 hover:to-secondary-400",
        secondary: "bg-white text-black hover:bg-white/90 border shadow-md",
        outline:
          "text-primary-300 border border-primary-800 bg-primary-900 rounded-xl hover:border-primary-400",
      },
      size: {
        default: "h-10 p-4",
        sm: "px-4 py-2",
        lg: "h-12 text-sm px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }) + "")}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
