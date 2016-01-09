// dependencies
var async = require('async');
var AWS = require('aws-sdk');
var fs = require('fs');
var sprintf = require("sprintf-js").sprintf, vsprintf = require("sprintf-js").vsprintf;
var s3 = new AWS.S3();

// process.env['LAMBDA_TASK_ROOT'] = '/var/www/lambda_dynamodb_upload_s3';
var dstBucket = "avyon.users.files"; // Processing.Scripts
var txt_file = process.env['LAMBDA_TASK_ROOT'] + "/photo_scan.txt";

function process_record(record, callback) {
	console.log(record);
	email = record['email']['S'];
	var record_data = [ record['1.1']['S'], record['1.2']['S'], record['2.3']['S'], record['2.4']['S'], record['3.5']['S'],
		record['3.6']['S'], record['3.7']['S'], record['4.8']['S'], record['4.9']['S'] ];
	// console.log(record_data);
	fs.readFile(txt_file, {
		encoding : 'utf-8'
	}, function(err, data) {
		if (!err) {
			// console.log('received data: ' + data);
			var res = vsprintf(data, record_data);
			// console.log('received data: ' + res);
			output_filename = "Processing.Scripts/" + email + "_" + new Date().getTime() + ".txt";
			s3.putObject({
				Bucket : dstBucket,
				Key : output_filename,
				Body : res,
				ContentType : "applicatin/txt"
			}, function(error, data) {

				if (error != null) {
					console.log("error: " + error);
				} else {
					console.log('upload done...');
				}
				callback();
			});

		} else {
			console.log(err);
			callback();
		}

	});

}

exports.handler = function(event, context) {
	// console.log('Received event:', JSON.stringify(event, null, 2));
	async.each(event.Records, function(record, callback) {
		if ("NewImage" in record.dynamodb) {
			process_record(record.dynamodb.NewImage, function() {
				callback();
			});
		} else {
			console.log('no new image');
			callback();
		}

	}, function() {
		var res = "Successfully processed " + event.Records.length + " records.";
		context.done(null, {
			message : res
		});
	});

};

// lambda-local -l index.js -h vt -e data/input.js -t 60
