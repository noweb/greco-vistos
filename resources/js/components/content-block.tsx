export function ContentBlock({ children, section_title, section_description }: { children: React.ReactNode, section_title: string, section_description: string }) {
    return (
        <div className="grid w-full grid-cols-1 xl:grid-cols-4 gap-4">
            <div className="col-span-1">
                <div className="">
                    <div className="text-gray-900">
                        <h3 className="text-lg font-bold">{section_title}</h3>
                        <p className="mt-2 text-sm text-gray-500">{section_description}</p>
                    </div>
                </div>
            </div>
            <div className="col-span-3">
                <div className="overflow-hidden rounded-xl bg-white shadow-sm">
                    <div className="p-6 text-gray-900 grid grid-cols-6 gap-8 max-w-4xl">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
