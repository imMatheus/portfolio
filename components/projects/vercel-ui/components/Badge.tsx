import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from 'lib/utils'

const badgeVariants = cva('inline-flex items-center justify-center rounded-full capitalize whitespace-nowrap', {
	variants: {
		variant: {
			gray: 'bg-[var(--ds-gray-700)] text-white',
			'gray-subtle': 'bg-[var(--ds-gray-200)] text-[var(--ds-gray-1000)]',
			blue: 'bg-[var(--ds-blue-700)] text-white',
			'blue-subtle': 'bg-[var(--ds-blue-200)] text-[var(--ds-blue-900)]',
			purple: 'bg-[var(--ds-purple-700)] text-white',
			'purple-subtle': 'bg-[var(--ds-purple-200)] text-[var(--ds-purple-900)]',
			amber: 'bg-[var(--ds-amber-700)] text-black',
			'amber-subtle': 'bg-[var(--ds-amber-200)] text-[var(--ds-amber-900)]',
			red: 'bg-[var(--ds-red-700)] text-white',
			'red-subtle': 'bg-[var(--ds-red-200)] text-[var(--ds-red-900)]',
			pink: 'bg-[var(--ds-pink-700)] text-white',
			'pink-subtle': 'bg-[var(--ds-pink-300)] text-[var(--ds-pink-900)]',
			green: 'bg-[var(--ds-green-700)] text-white',
			'green-subtle': 'bg-[var(--ds-green-200)] text-[var(--ds-green-900)]',
			teal: 'bg-[var(--ds-teal-700)] text-white',
			'teal-subtle': 'bg-[var(--ds-teal-300)] text-[var(--ds-teal-900)]',
			// TODO revisit this pink color
			trial: 'bg-gradient-to-br from-blue-700 to-[#f81be6] text-white',
			turbo: 'bg-gradient-to-br from-[#ff1e56] to-[#0096ff] text-white'
		},
		size: {
			sm: 'px-1.5 h-5 text-[11px] gap-0.5 [&_svg]:w-[11px] [&_svg]:h-[11px]',
			md: 'px-2.5 h-6 text-xs gap-1 [&_svg]:w-[14px] [&_svg]:h-[14px]',
			lg: 'px-3 h-8 text-sm gap-1.5 [&_svg]:w-4 [&_svg]:h-4'
		}
	},
	defaultVariants: {
		variant: 'gray',
		size: 'md'
	}
})

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
	icon?: React.ReactNode
}

// TODO add icons
function Badge({ className, variant, size, icon, children, ...props }: BadgeProps) {
	return (
		<span className={cn(badgeVariants({ variant, size }), className)} {...props}>
			{icon && <span>{icon}</span>}
			{children}
		</span>
	)
}

export { Badge, badgeVariants }
