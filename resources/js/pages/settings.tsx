import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';

export default function Settings() {
    return (
        <AppLayout>
            <Head title="Dashboard" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Configurações</div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
