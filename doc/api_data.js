define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "C__Users_Netreca_Desktop_api_brain_doc_main_js",
    "groupTitle": "C__Users_Netreca_Desktop_api_brain_doc_main_js",
    "name": ""
  },
  {
    "type": "get",
    "url": "http://localhost:8000/groups/",
    "title": "List of all the groups",
    "name": "Complete_groups_list",
    "group": "Groups",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost:8000/groups/",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response-Example:",
          "content": "[\n        {\n            \"name\": \"_analyticsusers\",\n            \"gid\": 250,\n            \"members\": [\n                \"dwoodlins\",\n                \"tom\"\n            ]\n        },\n        {\n            \"name\": \"docker\",\n            \"gid\": 1002,\n            \"members\": [\n                \"brian\",\n                \"kay\",\n                \"tom\"\n            ]\n        },\n        {\n            \"name\": \"node\",\n            \"gid\": 1003,\n            \"members\": [\n                \"brian\"\n            ]\n        },\n        {\n            \"name\": \"test\",\n            \"gid\": 1004,\n            \"members\": []\n        }\n    ]",
          "type": "JSON"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./brain.js",
    "groupTitle": "Groups"
  },
  {
    "type": "get",
    "url": "http://localhost:8000/groups/:id",
    "title": "Group search with id",
    "name": "Group_search_with_id",
    "group": "Groups",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "gid",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost:8000/groups/250",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response-Example:",
          "content": "{\n        \"name\": \"_analyticsusers\",\n        \"gid\": 250,\n        \"members\": [\n            \"dwoodlins\",\n            \"tom\"\n        ]\n    }",
          "type": "JSON"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./brain.js",
    "groupTitle": "Groups"
  },
  {
    "type": "get",
    "url": "http://localhost:8000/groups/query?",
    "title": "Search groups with complex queries",
    "name": "Groups_complex_search",
    "group": "Groups",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": true,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": true,
            "field": "gid",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost:8000/groups/query?gid=1002&name=docker",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response-Example:",
          "content": "{\n        \"name\": \"docker\",\n        \"gid\": 1002,\n        \"members\": [\n            \"brian\",\n            \"kay\",\n            \"tom\"\n        ]\n    }",
          "type": "JSON"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./brain.js",
    "groupTitle": "Groups"
  },
  {
    "type": "get",
    "url": "http://localhost:8000/users/",
    "title": "List of all the users",
    "name": "Complete_Users_list",
    "group": "Users",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost:8000/users/",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response-Example:",
          "content": "[\n        {\n            \"name\": \"root\",\n            \"uid\": 0,\n            \"gid\": 0,\n            \"comment\": \"root\",\n            \"home\": \"/root\",\n            \"shell\": \"/bin/bash\"\n        },\n        {\n            \"name\": \"dwoodlins\",\n            \"uid\": 1001,\n            \"gid\": 1001,\n            \"comment\": \"\",\n            \"home\": \"/home\",\n            \"shell\": \"/bin\"\n        },\n        {\n            \"name\": \"tom\",\n            \"uid\": 1002,\n            \"gid\": 1002,\n            \"comment\": \"\",\n            \"home\": \"/home\",\n            \"shell\": \"/bin\"\n        },\n        {\n            \"name\": \"brian\",\n            \"uid\": 1003,\n            \"gid\": 1003,\n            \"comment\": \"\",\n            \"home\": \"/home\",\n            \"shell\": \"/bin\"\n        },\n        {\n            \"name\": \"kay\",\n            \"uid\": 1004,\n            \"gid\": 1004,\n            \"comment\": \"\",\n            \"home\": \"/home\",\n            \"shell\": \"/bin\"\n        }\n    ]",
          "type": "JSON"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./brain.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "http://localhost:8000/users/:id/groups",
    "title": "Group search with User id",
    "name": "Group_search_with_User_id",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "uid",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost:8000/users/1001/groups",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response-Example:",
          "content": "[\n        {\n            \"name\": \"_analyticsusers\",\n            \"gid\": 250,\n            \"members\": [\n                \"dwoodlins\",\n                \"tom\"\n            ]\n        }\n    ]",
          "type": "JSON"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./brain.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "http://localhost:8000/users/:id",
    "title": "User search with id",
    "name": "User_search_with_id",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "uid",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost:8000/users/1001",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response-Example:",
          "content": "{\n        \"name\": \"dwoodlins\",\n        \"uid\": 1001,\n        \"gid\": 1001,\n        \"comment\": \"\",\n        \"home\": \"/home\",\n        \"shell\": \"/bin\"\n    }",
          "type": "JSON"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./brain.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "http://localhost:8000/users/query?",
    "title": "Search users with complex queries",
    "name": "Users_complex_search",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": true,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": true,
            "field": "uid",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": true,
            "field": "gid",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": true,
            "field": "comment",
            "description": ""
          },
          {
            "group": "Parameter",
            "optional": true,
            "field": "home",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost:8000/users/query?name=root&comment=root",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response-Example:",
          "content": "[\n        {\n            \"name\": \"root\",\n            \"uid\": 0,\n            \"gid\": 0,\n            \"comment\": \"root\",\n            \"home\": \"/root\",\n            \"shell\": \"/bin/bash\"\n        }\n    ]",
          "type": "JSON"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./brain.js",
    "groupTitle": "Users"
  }
] });
