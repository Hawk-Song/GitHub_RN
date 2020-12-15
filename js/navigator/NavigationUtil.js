export default class NavigationUtil {
    /**
     * route to first page
     * @param params
     */
    static resetToHomePage(params) {
        const {navigation} = params;
        navigation.navigate('Main');
    }
}
