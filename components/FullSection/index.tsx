interface FullSectionProps {
    children: React.ReactNode
    id?: string
}

export const FullSection = ({ children, id }: FullSectionProps) => {
    return (
        <section
            id={id}
            className='w-full flex flex-col justify-center items-center bg-gray-800 text-gray-100 p-8'>
            {children}
        </section>
    )
}
