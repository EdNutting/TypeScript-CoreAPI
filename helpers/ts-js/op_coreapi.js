/// <reference path="coreapi.d.ts" />
var op_coreapi;
(function (op_coreapi) {
    function getAuthenticatedClient() {
        if (!window.csrftoken) {
            throw "CSRF Token not defined. Cannot create authenticated API client. Did you forget to include the relevant snippet in the page?";
            ;
            /*
            {% csrf_token %}
            <script>window.csrftoken = jQuery("[name=csrfmiddlewaretoken]").val();</script>
            */
        }
        var auth = auth || new window.coreapi.auth.SessionAuthentication({
            cookieString: 'csrfToken=' + window.csrftoken,
            csrfCookieName: 'csrfToken',
            csrfHeaderName: 'X-CSRFToken'
        });
        var client = client || new window.coreapi.Client({ auth: auth });
        return client;
    }
    op_coreapi.getAuthenticatedClient = getAuthenticatedClient;
})(op_coreapi || (op_coreapi = {}));
