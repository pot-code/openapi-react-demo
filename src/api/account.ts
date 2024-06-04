/**
 * Generated by orval v6.29.1 🍺
 * Do not edit manually.
 * 流程编辑器 API
 * OpenAPI spec version: 0.0.1
 */
import { customInstance } from "../lib/http/instance"
export interface FlowListItem {
  /** flow 创建时间 */
  created_at: string
  /** flow id */
  id: number
  /** flow 标题 */
  title: string
}

export interface FlowDetail {
  /** flow 创建时间 */
  created_at: string
  /** flow 边 */
  edges?: string
  /** flow id */
  id: number
  /** flow 节点 */
  nodes?: string
  /** flow 标题 */
  title: string
}

export interface CreateFlowRequestBody {
  /** flow 边 */
  edges?: string
  /** flow 节点 */
  nodes?: string
  /** flow 标题 */
  title?: string
}

export interface AccountInfo {
  activated: boolean
  membership: number
}

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

/**
 * Get account
 * @summary getAccount account
 */
export const getAccount = (options?: SecondParameter<typeof customInstance>) => {
  return customInstance<AccountInfo>({ url: `/account`, method: "GET" }, options)
}

export type GetAccountResult = NonNullable<Awaited<ReturnType<typeof getAccount>>>
