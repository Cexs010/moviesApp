declare module 'react-native-config' {
    export interface NativeConfig {
        MOVIE_DB_API_KEY: string;
    }

    export const Config: NativeConfig;
    export default Config;
}