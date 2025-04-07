import { ArchiveLists, NotesLists, TrashList } from '@/components/dashboard';
import Profile from '@/components/dashboard/profile';
import DashboardLayout from '@/layout/dashboard-layout';
import { useDashboardContext } from '@/store/contexts';

export default function Dashboard() {
  const { list } = useDashboardContext();

  return (
    <DashboardLayout>
      {list === 'Notes' ? (
        <NotesLists />
      ) : list === 'Archive' ? (
        <ArchiveLists />
      ) : list === 'Trash' ? (
        <TrashList />
      ) : (
        <Profile />
      )}
    </DashboardLayout>
  );
}
