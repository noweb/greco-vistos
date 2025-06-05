import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { SharedData, type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { PanelTopIcon, SettingsIcon, SquarePen } from 'lucide-react';
import { useEffect } from 'react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Editar Conteúdo',
        href: '/dashboard',
        icon: SquarePen,
    },
    {
        title: 'Configurações',
        href: '/dashboard/settings',
        icon: SettingsIcon,
    }
];

const footerNavItems: NavItem[] = [];

export function AppSidebar() {
    const page = usePage<SharedData>();
    const { app_url }: { app_url: string } = page.props;

    useEffect(() => {
        if (!footerNavItems.some(item => item.href === app_url)) {
            footerNavItems.push({
                title: 'Site',
                href: app_url,
                icon: PanelTopIcon,
            });
        }
    }, [app_url]);

    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
