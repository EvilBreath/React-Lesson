import axios from "axios";
import React from "react";

const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/";

function setApi({ url, method, params, data, headers:{} = {}}) {
  return axios({
    url,
    method,
    data,
    params,
    baseURL,
    headers: { 'Content-Type': 'application/json' },
  })
}

export async function getListCocktail() {
  return setApi( {
    url: '/list.php',
    method: 'get',
    params: {
      c: 'list',
    }
  })
}

export async function getCategoryList () {
  return setApi ( {
    url: '/filter.php',
    method: 'get',
    params: {
      c: 'Ordinary_Drink',
    }
  })
}

export async function getGlassList () {
  return setApi ( {
    url: '/filter.php',
    method: 'get',
    params: {
      g: 'Cocktail_glass',
    }
  })
}

export async function getAlcoList () {
  return setApi ( {
    url: '/filter.php',
    method: 'get',
    params: {
      a: 'Alcoholic',
    }
  })
}

export async function getIngridientList () {
  return setApi ( {
    url: '/filter.php',
    method: 'get',
    params: {
      i: 'Gin',
    }
  })
}