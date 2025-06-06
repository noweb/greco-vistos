export function ContentBlock({
    children,
    section_title,
    section_description,
    section_image,
}: {
    children: React.ReactNode;
    section_title: string;
    section_description: string;
    section_image?: string;
}) {
    return (
        <div className="grid w-full grid-cols-1 gap-4 xl:grid-cols-4">
            <div className="col-span-1">
                <div className="">
                    <div className="text-gray-900">
                        <h3 className="text-lg font-bold">{section_title}</h3>
                        <p className="mt-2 text-sm text-gray-500">{section_description}</p>
                        {section_image && <img src={section_image} alt={section_title} className="h-48 w-full rounded-md object-contain mt-3 self-center" />}
                    </div>
                </div>
            </div>
            <div className="col-span-3">
                <div className="overflow-hidden rounded-xl bg-white shadow-sm">
                    <div className="grid max-w-4xl grid-cols-6 gap-8 p-6 text-gray-900">{children}</div>
                </div>
            </div>
        </div>
    );
}
