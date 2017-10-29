const getDashboardData = (dashboardData) => {
    return {
        type: "GET_DASHBOARD",
        payload: dashboardData
    }
}
export default getDashboardData;