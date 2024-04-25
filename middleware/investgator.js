export default function ({store,route, redirect, next}) {
    if(!store.state.auth.user || (store.state.auth.user.data.type !== 'AGENCY_ADMIN' && store.state.auth.user.data.type !== 'ADMIN')) {
        redirect("/admin/login");

        store.commit("setIntendedUrl", route.fullPath);

        next(false);
    }
}