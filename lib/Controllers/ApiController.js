/**
 * MoesifAPILib
 *
 *
 */

var _request = require('../Http/Client/RequestClient'),
  _configuration = require('../configuration'),
  _APIHelper = require('../APIHelper');

function buildHeaders() {
  return {
    'content-type': 'application/json; charset=utf-8',
    'X-Moesif-Application-Id': _configuration.ApplicationId,
    'User-Agent': _configuration.UserAgent
  };
}

function buildCallback(callback) {
  return function (error, response, context) {
    if (error) {
      callback(
        {
          errorMessage: error.message,
          errorCode: error.code
        },
        null,
        context
      );
    } else if (response.statusCode >= 200 && response.statusCode <= 206) {
      callback(null, response, context);
    } else {
      callback(
        {
          errorMessage: "HTTP Response Not OK",
          errorCode: response.statusCode,
          errorResponse: response.body
        },
        null,
        context
      );
    }
  };
}

var ApiController = {

  /**
   * Add Single API Event Call
   * @param {EventModel} body    Required parameter: Example:
   * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
   *
   * @return {void}
   */
  createEvent: function (body, callback) {

    //prepare query string for API call;
    var _baseUri = _configuration.BaseUri;

    var _queryBuilder = _baseUri + "/v1/events";

    //validate and preprocess url
    var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

    //Remove null values
    // _APIHelper.cleanObject(body);

    //Construct the request
    var _options = {
      queryUrl: _queryUrl,
      method: "POST",
      headers: buildHeaders(),
      body: _APIHelper.jsonSerialize(body),
    };

    _request(
      _options,
      buildCallback(callback)
    );
  },


  /**
   * Add multiple API Events in a single batch (batch size must be less than 250kb)
   * @param {array} body    Required parameter: Example:
   * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
   *
   * @return {void}
   */
  createEventsBatch: function (body, callback) {

    //prepare query string for API call;
    var _baseUri = _configuration.BaseUri;

    var _queryBuilder = _baseUri + "/v1/events/batch";

    //validate and preprocess url
    var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

    //Remove null values
    // _APIHelper.cleanObject(body);

    //Construct the request
    var _options = {
      queryUrl: _queryUrl,
      method: "POST",
      headers: buildHeaders(),
      body: _APIHelper.jsonSerialize(body),
    };

    _request(
      _options,
      buildCallback(callback)
    );
  },


  /**
   * Update a single user
   * @param {UserModel} body    Required parameter: Example:
   * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
   *
   * @return {void}
   */
  updateUser: function (body, callback) {

    //prepare query string for API call;
    var _baseUri = _configuration.BaseUri;

    var _queryBuilder = _baseUri + "/v1/users";

    //validate and preprocess url
    var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

    //Remove null values
    _APIHelper.cleanObject(body);

    //Construct the request
    var _options = {
      queryUrl: _queryUrl,
      method: "POST",
      headers: buildHeaders(),
      body: _APIHelper.jsonSerialize(body),
    };

    _request(
      _options,
      buildCallback(callback)
    );
  },

  /**
   * Update multiple Users in a single batch (batch size must be less than 250kb)
   * @param {array} body    Required parameter: Example:
   * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
   *
   * @return {void}
   */
  updateUsersBatch: function (body, callback) {

    //prepare query string for API call;
    var _baseUri = _configuration.BaseUri;

    var _queryBuilder = _baseUri + "/v1/users/batch";

    //validate and preprocess url
    var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

    //Remove null values
    _APIHelper.cleanObject(body);

    //Construct the request
    var _options = {
      queryUrl: _queryUrl,
      method: "POST",
      headers: buildHeaders(),
      body: _APIHelper.jsonSerialize(body),
    };

    _request(
      _options,
      buildCallback(callback)
    );
  },

  /**
   * Get application configuration
   * @param {void}    parameter: Example:
   * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
   *
   * @return {void}
   */
  getAppConfig: function (callback) {

    //prepare query string for API call;
    var _baseUri = _configuration.BaseUri;

    var _queryBuilder = _baseUri + "/v1/config";

    //validate and preprocess url
    var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

    //Construct the request
    var _options = {
      queryUrl: _queryUrl,
      method: "GET",
      headers: buildHeaders(),
    };

    _request(
      _options,
      buildCallback(callback)
    );
  },

  /**
   * Get governance rules configuration
   * @param {void}    parameter: Example:
   * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
   *
   * @return {void}
   */
  getRules: function (callback) {

    //prepare query string for API call;
    var _baseUri = _configuration.BaseUri;

    var _queryBuilder = _baseUri + "/v1/rules";

    //validate and preprocess url
    var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

    //Construct the request
    var _options = {
      queryUrl: _queryUrl,
      method: "GET",
      headers: buildHeaders(),
    };

    _request(
      _options,
      buildCallback(callback)
    );
  },

  /**
   * Update a single company
   * @param {CompanyModel} body    Required parameter: Example:
   * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
   *
   * @return {void}
   */
  updateCompany: function (body, callback) {

    //prepare query string for API call;
    var _baseUri = _configuration.BaseUri;

    var _queryBuilder = _baseUri + "/v1/companies";

    //validate and preprocess url
    var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

    //Remove null values
    _APIHelper.cleanObject(body);

    //Construct the request
    var _options = {
      queryUrl: _queryUrl,
      method: "POST",
      headers: buildHeaders(),
      body: _APIHelper.jsonSerialize(body),
    };

    _request(
      _options,
      buildCallback(callback)
    );
  },

  /**
   * Update multiple companies in a single batch (batch size must be less than 250kb)
   * @param {array} body    Required parameter: Example:
   * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
   *
   * @return {void}
   */
  updateCompaniesBatch: function (body, callback) {

    //prepare query string for API call;
    var _baseUri = _configuration.BaseUri;

    var _queryBuilder = _baseUri + "/v1/companies/batch";

    //validate and preprocess url
    var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

    //Remove null values
    _APIHelper.cleanObject(body);

    //Construct the request
    var _options = {
      queryUrl: _queryUrl,
      method: "POST",
      headers: buildHeaders(),
      body: _APIHelper.jsonSerialize(body),
    };

    _request(
      _options,
      buildCallback(callback)
    );
  },

  /**
 * Update a single subscription
 * @param {SubscriptionModel} body    Required parameter: Example:
 * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
 *
 * @return {void}
 */
  updateSubscription: function (body, callback) {

    //prepare query string for API call;
    var _baseUri = _configuration.BaseUri;

    var _queryBuilder = _baseUri + "/v1/subscriptions";

    //validate and preprocess url
    var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

    //Remove null values
    _APIHelper.cleanObject(body);

    //Construct the request
    var _options = {
      queryUrl: _queryUrl,
      method: "POST",
      headers: buildHeaders(),
      body: _APIHelper.jsonSerialize(body),
    };

    _request(
      _options,
      buildCallback(callback)
    );
  },
  /**
   * Update multiple subscriptions in a single batch (batch size must be less than 250kb)
   * @param {array} body    Required parameter: Example:
   * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
   *
   * @return {void}
   */
  updateSubscriptionsBatch: function (body, callback) {

    //prepare query string for API call;
    var _baseUri = _configuration.BaseUri;

    var _queryBuilder = _baseUri + "/v1/subscriptions/batch";

    //validate and preprocess url
    var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

    //Remove null values
    _APIHelper.cleanObject(body);

    //Construct the request
    var _options = {
      queryUrl: _queryUrl,
      method: "POST",
      headers: buildHeaders(),
      body: _APIHelper.jsonSerialize(body),
    };

    _request(
      _options,
      buildCallback(callback)
    );
  },

  /**
   * Send a single action
   * @param {ActionModel} body    Required parameter: Example:
   * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
   *
   * @return {void}
   */
  sendAction: function (body, callback) {

    //prepare query string for API call;
    var _baseUri = _configuration.BaseUri;

    var _queryBuilder = _baseUri + "/v1/actions";

    //validate and preprocess url
    var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

    //Remove null values
    _APIHelper.cleanObject(body);
    //Convert request object property names to snake case
    _APIHelper.snakeCase(body);

    //Construct the request
    var _options = {
      queryUrl: _queryUrl,
      method: "POST",
      headers: buildHeaders(),
      body: _APIHelper.jsonSerialize(body),
    };
    
    console.log(_options.body)
    _request(
      _options,
      buildCallback(callback)
    );
  },

  /**
   * Send multiple actions in a single batch (batch size must be less than 250kb)
   * @param {array} body    Required parameter: Example:
   * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
   *
   * @return {void}
   */
  sendActionsBatch: function (body, callback) {

    //prepare query string for API call;
    var _baseUri = _configuration.BaseUri;

    var _queryBuilder = _baseUri + "/v1/actions/batch";

    //validate and preprocess url
    var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

    //Remove null values
    _APIHelper.cleanObject(body);
    //Convert request object properties to snake case
    _APIHelper.snakeCase(body);

    //Construct the request
    var _options = {
      queryUrl: _queryUrl,
      method: "POST",
      headers: buildHeaders(),
      body: _APIHelper.jsonSerialize(body),
    };

    _request(
      _options,
      buildCallback(callback)
    );
  },

};

module.exports = ApiController;
