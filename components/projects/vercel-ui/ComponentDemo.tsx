import React, { PropsWithChildren } from 'react'
import { Gauge } from './components/Guage'
import { Badge } from './components/Badge'
import { Button } from './components/Button'
import { Snippet } from './components/Snippet'

export const ComponentDemo: React.FC = () => {
	return (
		<div
			className="group w-full overflow-x-hidden [&>*>*]:pointer-events-none"
			style={{ '--offset': '75px' } as React.CSSProperties}
		>
			<div className="relative left-1/2 mb-2 flex w-max translate-x-[calc(-50%_+_var(--offset))] gap-2 transition-transform duration-300 group-hover:translate-x-[calc(-50%_-_var(--offset))]">
				<Button shadow shape="rounded" variant="error" loading>
					Saving
				</Button>
				<Button variant="default" shape="rounded">
					Long save button
				</Button>
				<Button disabled>Save</Button>
				<Button variant="warning">Warning</Button>
				<Button variant="secondary">Action</Button>
				<Button variant="secondary" shadow shape="rounded">
					Super long button
				</Button>
				<Button variant="error">Delete</Button>
				<Button variant="default">Save</Button>
				<Button shadow shape="rounded" variant="error">
					Round delete
				</Button>
				<Button shadow shape="rounded" variant="secondary">
					Logout
				</Button>
				<Button shadow shape="rounded" variant="error" loading>
					Saving
				</Button>
				<Button shadow shape="rounded" variant="error">
					Logout
				</Button>
				<Button loading size="small">
					Upload
				</Button>

				<Button shadow shape="rounded" variant="error" loading>
					Saving
				</Button>
				<Button variant="default" shape="rounded">
					Long save button
				</Button>
				<Button disabled>Save</Button>
				<Button variant="warning">Warning</Button>
				<Button variant="secondary">Action</Button>
				<Button variant="secondary" shadow shape="rounded">
					Super long button
				</Button>
				<Button variant="error">Delete</Button>
				<Button variant="default">Save</Button>
				<Button shadow shape="rounded" variant="error">
					Round delete
				</Button>
				<Button shadow shape="rounded" variant="secondary">
					Logout
				</Button>

				<Button variant="error">Delete</Button>
				<Button variant="default">Save</Button>
				<Button shadow shape="rounded" variant="error">
					Round delete
				</Button>
				<Button shadow shape="rounded" variant="secondary">
					Logout
				</Button>
				<Button shadow shape="rounded" variant="error" loading>
					Saving
				</Button>
				<Button shadow shape="rounded" variant="error">
					Logout
				</Button>
				<Button loading size="small">
					Upload
				</Button>
			</div>

			<div className="relative left-1/2 mb-2 flex w-max translate-x-[calc(-50%_-_var(--offset))] gap-2 transition-transform delay-75 duration-300 group-hover:translate-x-[calc(-50%_+_var(--offset))]">
				<Badge variant="gray">gray</Badge>
				<Badge variant="gray-subtle">gray-subtle</Badge>
				<Badge variant="blue">blue</Badge>

				<Badge variant="pink-subtle">pink-subtle</Badge>
				<Badge variant="green">green</Badge>
				<Badge variant="green-subtle">green-subtle</Badge>
				<Badge variant="teal">teal</Badge>
				<Badge variant="teal-subtle">teal-subtle</Badge>
				<Badge variant="blue-subtle">blue-subtle</Badge>
				<Badge variant="purple">purple</Badge>
				<Badge variant="purple-subtle">purple-subtle</Badge>

				<Badge variant="gray">gray</Badge>
				<Badge variant="gray-subtle">gray-subtle</Badge>
				<Badge variant="blue">blue</Badge>
				<Badge variant="blue-subtle">blue-subtle</Badge>
				<Badge variant="purple">purple</Badge>
				<Badge variant="purple-subtle">purple-subtle</Badge>
				<Badge variant="amber">amber</Badge>
				<Badge variant="amber-subtle">amber-subtle</Badge>
				<Badge variant="red">red</Badge>
				<Badge variant="red-subtle">red-subtle</Badge>
				<Badge variant="pink">pink</Badge>
				<Badge variant="amber">amber</Badge>
				<Badge variant="amber-subtle">amber-subtle</Badge>
				<Badge variant="red">red</Badge>
				<Badge variant="red-subtle">red-subtle</Badge>
				<Badge variant="pink">pink</Badge>
				<Badge variant="pink-subtle">pink-subtle</Badge>
				<Badge variant="green">green</Badge>
				<Badge variant="green-subtle">green-subtle</Badge>
				<Badge variant="teal">teal</Badge>
				<Badge variant="teal-subtle">teal-subtle</Badge>
			</div>

			<div className="relative left-1/2 mb-2 flex w-max translate-x-[calc(-50%_-_var(--offset))] gap-2 transition-transform delay-100 duration-300 group-hover:translate-x-[calc(-50%_+_var(--offset))]">
				<Gauge size="small" value={50} />
				<Gauge size="small" value={80} />
				<Gauge size="small" value={10} />
				<Gauge size="small" value={15} />
				<Gauge size="small" value={95} />
				<Gauge size="small" value={35} />
				<Gauge size="small" value={100} />
				<Gauge size="small" value={5} />
				<Gauge size="small" value={67} />
				<Gauge size="small" value={76} />
				<Gauge size="small" value={46} />
				<Gauge size="small" value={52} />
				<Gauge size="small" value={38} />
				<Gauge size="small" value={81} />
				<Gauge size="small" value={50} />
				<Gauge size="small" value={80} />
				<Gauge size="small" value={10} />
				<Gauge size="small" value={15} />
				<Gauge size="small" value={95} />
				<Gauge size="small" value={35} />
				<Gauge size="small" value={100} />
				<Gauge size="small" value={5} />
				<Gauge size="small" value={67} />
				<Gauge size="small" value={76} />
				<Gauge size="small" value={46} />
				<Gauge size="small" value={52} />
				<Gauge size="small" value={38} />
				<Gauge size="small" value={81} />
				<Gauge size="small" value={50} />
				<Gauge size="small" value={80} />
				<Gauge size="small" value={10} />
				<Gauge size="small" value={15} />
				<Gauge size="small" value={95} />
				<Gauge size="small" value={35} />
				<Gauge size="small" value={100} />
				<Gauge size="small" value={5} />
				<Gauge size="small" value={67} />
				<Gauge size="small" value={76} />
				<Gauge size="small" value={46} />
				<Gauge size="small" value={52} />
				<Gauge size="small" value={38} />
				<Gauge size="small" value={81} />

				<Gauge size="small" value={67} />
				<Gauge size="small" value={76} />
				<Gauge size="small" value={46} />
				<Gauge size="small" value={52} />
				<Gauge size="small" value={38} />
				<Gauge size="small" value={81} />
				<Gauge size="small" value={50} />
				<Gauge size="small" value={80} />
				<Gauge size="small" value={10} />
				<Gauge size="small" value={15} />
				<Gauge size="small" value={95} />

				<Gauge size="small" value={67} />
				<Gauge size="small" value={76} />
				<Gauge size="small" value={46} />
				<Gauge size="small" value={52} />
				<Gauge size="small" value={38} />
				<Gauge size="small" value={81} />
				<Gauge size="small" value={50} />
				<Gauge size="small" value={80} />
				<Gauge size="small" value={10} />
				<Gauge size="small" value={15} />
				<Gauge size="small" value={95} />
			</div>

			<div className="relative left-1/2 mb-2 flex w-max translate-x-[calc(-50%_+_var(--offset))] gap-2 transition-transform delay-150 duration-300 group-hover:translate-x-[calc(-50%_-_var(--offset))]">
				<Snippet text="npm init next-app" width="230px" />
				<Snippet text="Blue" prompt={false} type="success" width="120px" />
				<Snippet text="Matheus" width="200px" />
				<Snippet text="Is this red?" type="error" width="250px" />
				<Snippet text="Vaaarning" type="warning" width="250px" />
				<Snippet text="npm init next-app" width="230px" />

				<Snippet text="npm init next-app" width="230px" />
				<Snippet text="Blue" prompt={false} type="success" width="120px" />
				<Snippet text="Matheus" width="200px" />
				<Snippet text="Is this red?" type="error" width="250px" />
				<Snippet text="Vaaarning" type="warning" width="180px" />
				<Snippet text="npm init next-app" width="230px" />
				<Snippet text="npm init next-app" width="230px" />

				<Snippet text="Blue" prompt={false} type="success" width="120px" />
				<Snippet text="Matheus" width="200px" />
				<Snippet text="Is this red?" type="error" width="250px" />
				<Snippet text="Vaaarning" type="warning" width="250px" />
				<Snippet text="npm init next-app" width="230px" />
			</div>
		</div>
	)
}
