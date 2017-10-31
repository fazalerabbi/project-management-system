const getDashboardData = (dashboardData) => {
    return {
        type: "GET_DASHBOARD",
        payload: dashboardData
    }
}
const dashboardActions = {
    getDashboardData
};

export default dashboardActions;
