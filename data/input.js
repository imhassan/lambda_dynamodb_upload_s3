module.exports = {
	"Records" : [ {
		"eventID" : "1",
		"eventVersion" : "1.0",
		"dynamodb" : {
			"Keys" : {
				"project" : {
					"S" : "Whatsapp"
				},
				"email" : {
					"S" : "imhassan666@gmail.com"
				}
			},
			"NewImage" : {
				"Products.6" : {
					"S" : "Yes"
				},
				"Products.4" : {
					"S" : "No"
				},
				"Products.5" : {
					"S" : "Yes"
				},
				"Products.2" : {
					"S" : "Yes"
				},
				"Products.3" : {
					"S" : "Yes"
				},
				"Products.1" : {
					"S" : "Yes"
				},
				"project" : {
					"S" : "Whatsapp"
				},
				"CognitoID" : {
					"S" : "us-east-1:11602172-201f-477b-99e4-c073b865c9d2"
				},
				"1.1" : {
					"S" : "HighAccuracy"
				},
				"1.2" : {
					"S" : "ReferencePreselection"
				},
				"2.3" : {
					"S" : "HighQuality"
				},
				"2.4" : {
					"S" : "AggressiveFiltering"
				},
				"3.5" : {
					"S" : "HeightField"
				},
				"3.6" : {
					"S" : "MediumFaceCount"
				},
				"3.7" : {
					"S" : "EnabledInterpolation"
				},
				"4.8" : {
					"S" : "GenericMapping"
				},
				"email" : {
					"S" : "imhassan666@gmail.com"
				},
				"4.9" : {
					"S" : "MosaicBlending"
				}
			},
			"SequenceNumber" : "10750400000000001256198796",
			"SizeBytes" : 378,
			"StreamViewType" : "NEW_AND_OLD_IMAGES"
		},
		"awsRegion" : "us-west-2",
		"eventName" : "INSERT",
		"eventSourceARN" : "arn:aws:dynamodb:us-west-2:account-id:table/ExampleTableWithStream/stream/2015-06-27T00:48:05.899",
		"eventSource" : "aws:dynamodb"
	} ]
};