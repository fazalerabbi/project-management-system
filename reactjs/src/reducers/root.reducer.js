import { combineReducers } from 'redux';
import ProfileReducer from './profile.reducer';
import ProjectReducer from './projects.reducer';
import SettingsReducer from './settings.reducer';
import TaskReducer from './tasks.reducer';
import DashboardReducer from './dashboard.reducer';

const RootReducer = combineReducers({
    profile: ProfileReducer,
    settings: SettingsReducer,
    project: ProjectReducer,
    task: TaskReducer,
    dashboard: DashboardReducer
});

export default RootReducer;