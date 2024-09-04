import { ActivityFeed } from './components/ActivityFeed'
import { Chart } from './components/Chart'
import { ColouredCards } from './components/ColouredCards'
import { DashboardBox } from './components/DashboardBox'
import { Header } from './components/Header'
import { Meetings } from './components/Meetings'
import { RecentAddedJobs } from './components/jobs/RecentAddedJobs'
import { DashboardLayout } from './layout/DashboardLayout'

function App() {

  return (
    <DashboardLayout >
      <>
        <Header />

        <ColouredCards />

        <section className="w-full grid grid-cols-[2fr_1fr] items-stretch gap-[1.875rem]">
          <DashboardBox>
            <Chart />
          </DashboardBox>

          <DashboardBox>
            <RecentAddedJobs />
          </DashboardBox>
        </section>

        <section className="w-full grid grid-cols-2 items-stretch gap-[1.875rem]">
          <DashboardBox>
            <ActivityFeed />
          </DashboardBox>

          <DashboardBox>
            <Meetings />
          </DashboardBox>
        </section>
      </>
    </DashboardLayout>
  )
}

export default App
