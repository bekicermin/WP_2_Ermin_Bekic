import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { MyTrackersComponent } from './pages/my-trackers/my-trackers.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HabitTrackerComponent } from './trackers/habit-tracker/habit-tracker.component';
import { SleepTrackerComponent } from './trackers/sleep-tracker/sleep-tracker.component';
import { WaterTrackerComponent } from './trackers/water-tracker/water-tracker.component';
import { StudyTrackerComponent } from './trackers/study-tracker/study-tracker.component';
import { MealTrackerComponent } from './trackers/meal-tracker/meal-tracker.component';
import { MoodTrackerComponent } from './trackers/mood-tracker/mood-tracker.component';
import { ProfileComponent } from './pages/profile/profile.component';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'my-trackers', component: MyTrackersComponent },
  { path: 'habit-tracker', component: HabitTrackerComponent },
  { path: 'sleep-tracker', component: SleepTrackerComponent },
  { path: 'water-tracker', component: WaterTrackerComponent },
  { path: 'study-tracker', component: StudyTrackerComponent },
  { path: 'meal-tracker', component: MealTrackerComponent },
  { path: 'mood-tracker', component: MoodTrackerComponent },
  { path: 'profile', component: ProfileComponent }
];
