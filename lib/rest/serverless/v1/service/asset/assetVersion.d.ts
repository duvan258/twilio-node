/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V1 = require('../../../V1');
import { SerializableClass } from '../../../../../interfaces';

type AssetVersionVisibility = 'public'|'private'|'protected';

/**
 * Initialize the AssetVersionList
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param serviceSid - Service Sid.
 * @param assetSid - Asset Sid.
 */
declare function AssetVersionList(version: V1, serviceSid: string, assetSid: string): AssetVersionListInstance;

interface AssetVersionListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): AssetVersionContext;
  /**
   * Streams AssetVersionInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: AssetVersionListInstanceEachOptions, callback?: (item: AssetVersionInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a asset_version
   *
   * @param sid - Asset Version Sid.
   */
  get(sid: string): AssetVersionContext;
  /**
   * Retrieve a single target page of AssetVersionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: AssetVersionPage) => any): Promise<AssetVersionPage>;
  /**
   * Lists AssetVersionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: AssetVersionListInstanceOptions, callback?: (error: Error | null, items: AssetVersionInstance[]) => any): Promise<AssetVersionInstance[]>;
  /**
   * Retrieve a single page of AssetVersionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: AssetVersionListInstancePageOptions, callback?: (error: Error | null, items: AssetVersionPage) => any): Promise<AssetVersionPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 */
interface AssetVersionListInstanceEachOptions {
  callback?: (item: AssetVersionInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
interface AssetVersionListInstanceOptions {
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface AssetVersionListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface AssetVersionPayload extends AssetVersionResource, Page.TwilioResponsePayload {
}

interface AssetVersionResource {
  account_sid: string;
  asset_sid: string;
  date_created: Date;
  path: string;
  service_sid: string;
  sid: string;
  url: string;
  visibility: AssetVersionVisibility;
}

interface AssetVersionSolution {
  assetSid?: string;
  serviceSid?: string;
}


declare class AssetVersionContext {
  /**
   * Initialize the AssetVersionContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param serviceSid - Service Sid.
   * @param assetSid - Asset Sid.
   * @param sid - Asset Version Sid.
   */
  constructor(version: V1, serviceSid: string, assetSid: string, sid: string);

  /**
   * fetch a AssetVersionInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: AssetVersionInstance) => any): Promise<AssetVersionInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class AssetVersionInstance extends SerializableClass {
  /**
   * Initialize the AssetVersionContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - Service Sid.
   * @param assetSid - Asset Sid.
   * @param sid - Asset Version Sid.
   */
  constructor(version: V1, payload: AssetVersionPayload, serviceSid: string, assetSid: string, sid: string);

  private _proxy: AssetVersionContext;
  accountSid: string;
  assetSid: string;
  dateCreated: Date;
  /**
   * fetch a AssetVersionInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: AssetVersionInstance) => any): void;
  path: string;
  serviceSid: string;
  sid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  url: string;
  visibility: AssetVersionVisibility;
}


declare class AssetVersionPage extends Page<V1, AssetVersionPayload, AssetVersionResource, AssetVersionInstance> {
  /**
   * Initialize the AssetVersionPage
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: AssetVersionSolution);

  /**
   * Build an instance of AssetVersionInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: AssetVersionPayload): AssetVersionInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { AssetVersionContext, AssetVersionInstance, AssetVersionList, AssetVersionListInstance, AssetVersionListInstanceEachOptions, AssetVersionListInstanceOptions, AssetVersionListInstancePageOptions, AssetVersionPage, AssetVersionPayload, AssetVersionResource, AssetVersionSolution }
