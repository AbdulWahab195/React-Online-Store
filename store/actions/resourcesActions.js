import { api } from '../../service/api';
import * as types from './action-types/actions';

export const getCatalogs = () => {
    let options = { url: `catalogs` };
    options.types = [
        types.GET_CATALOGS_SUCCESS,
        types.GET_CATALOGS_FAILURE
    ]
    return api.get(options);
}

export const getLiteratures = () => {
    let options = { url: `literatures` };
    options.types = [
        types.GET_LITRATURE_SUCCESS,
        types.GET_LITRATURE_FAILURE
    ]
    return api.get(options);
}

export const getVideos = () => {
    let options = { url: `videos` };
    options.types = [
        types.GET_VIDEOS_SUCCESS,
        types.GET_VIDEOS_FAILURE
    ]
    return api.get(options);
}

export const getNews = () => {
    let options = { url: `news` };
    options.types = [
        types.GET_NEWS_SUCCESS,
        types.GET_NEWS_FAILURE
    ]
    return api.get(options);
}

export const getNewsById = (id) => {
    let options = { url: `news/${id}` };
    options.types = [
        types.GET_NEWSBYID_SUCCESS,
        types.GET_NEWSBYID_FAILURE
    ]
    return api.get(options);
}

export const getBrands = () => {
    let options = { url: `brands` };
    options.types = [
        types.GET_BRANDS_SUCCESS,
        types.GET_BRANDS_FAILURE
    ]
    return api.get(options);
}

export const subscribe = (params) => {
    let options = { url: `contact` };
    options.types = [
        types.GET_BRANDS_SUCCESS,
        types.GET_BRANDS_FAILURE
    ]
    return api.post(options, params);
}

export const getSalesReps = () => {
    let options = { url: `salesreps` };
    options.types = [
        types.GET_SALES_REPS_SUCCESS,
        types.GET_SALES_REPS_SUCCESS
    ]
    return api.get(options);
}