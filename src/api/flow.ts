/**
 * Generated by orval v6.29.1 🍺
 * Do not edit manually.
 * local-dev
 * OpenAPI spec version: 1.0.0
 */
import * as axios from "axios"
import type { AxiosRequestConfig, AxiosResponse } from "axios"
export type DeleteFlowId204 = { [key: string]: any }

export type PostFlowBody = {
  /** @nullable */
  edges?: string | null
  /** @nullable */
  nodes?: string | null
  title: string
}

export interface FlowListObject {
  created_at: string
  id: number
  title: string
}

export interface FlowDetailObject {
  created_at: string
  /** @nullable */
  edges?: string | null
  id: number
  /** @nullable */
  nodes?: string | null
  title: string
}

/**
 * @summary 获取 flow 列表
 */
export const getFlow = <TData = AxiosResponse<FlowListObject[]>>(options?: AxiosRequestConfig): Promise<TData> => {
  return axios.default.get(`/flow`, options)
}

/**
 * @summary 创建 flow
 */
export const postFlow = <TData = AxiosResponse<FlowListObject>>(
  postFlowBody: PostFlowBody,
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return axios.default.post(`/flow`, postFlowBody, options)
}

/**
 * @summary 更新 flow
 */
export const putFlowId = <TData = AxiosResponse<FlowDetailObject>>(
  id: number,
  flowDetailObject: FlowDetailObject,
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return axios.default.put(`/flow/${id}`, flowDetailObject, options)
}

/**
 * @summary 删除 flow
 */
export const deleteFlowId = <TData = AxiosResponse<DeleteFlowId204>>(
  id: string,
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return axios.default.delete(`/flow/${id}`, options)
}

/**
 * @summary 获取 flow
 */
export const getFlowId = <TData = AxiosResponse<FlowDetailObject>>(
  id: string,
  options?: AxiosRequestConfig,
): Promise<TData> => {
  return axios.default.get(`/flow/${id}`, options)
}

export type GetFlowResult = AxiosResponse<FlowListObject[]>
export type PostFlowResult = AxiosResponse<FlowListObject>
export type PutFlowIdResult = AxiosResponse<FlowDetailObject>
export type DeleteFlowIdResult = AxiosResponse<DeleteFlowId204>
export type GetFlowIdResult = AxiosResponse<FlowDetailObject>
