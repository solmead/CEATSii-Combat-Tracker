/// jQuery plugin to add support for SwfUpload
/// (c) 2008 Steven Sanderson

(function($) {
    $.fn.makeAsyncUploader = function(options) {
        return this.each(function() {
            // Put in place a new container with a unique ID
            var id = $(this).attr("id");
            var container = $("<div class='async-uploader'/>");
            container.append($("<div class='progress-bar'><div>&nbsp;</div></div><br/>"));
            container.append($("<span id='" + id + "_completedMessage'/>"));
            container.append($("<span id='" + id + "_uploading'>Uploading... <input type='button' value='Cancel' class='button' />" +
            "<div style='display:none;'><span>Current Rate: </span><span id='" + id + "_MovingAverageSpeed'/></div>" +
            "<div style='display:block;'><span>Time Remaining: </span><span id='" + id + "_TimeRemaining'/></div>" +
            "<div style='display:none;'><span>Time Elapsed: </span><span id='" + id + "_TimeElapsed'></span></div>" +
            "<div style='display:none;'><span>Percent Uploaded: </span><span id='" + id + "_PercentUploaded'></span></div>" +
            "<div style='display:block;'><span>Amount of File uploaded: </span><span id='" + id + "_SizeUploaded'/></div>" +
            +"</span>"));
            container.append($("<span id='" + id + "_swf'/>"));
            container.append($("<input type='hidden' name='" + id + "_filename'/>"));
            container.append($("<input type='hidden' name='" + id + "_guid'/>"));
            $(this).before(container).remove();
            $("div.progress-bar", container).hide();
            $("span[id$=_uploading]", container).hide();


            // Instantiate the uploader SWF
            var swfu;
            var width = 109, height = 22;
            if (options) {
                width = options.width || width;
                height = options.height || height;
            }
            var defaults = {
                flash_url: "swfupload.swf",
                upload_url: "/Home/AsyncUpload",
                file_size_limit: "3 MB",
                file_types: "*.*",
                file_types_description: "All Files",
                debug: false,

                button_image_url: "blankButton.png",
                button_width: width,
                button_height: height,
                button_placeholder_id: id + "_swf",
                button_text: "<font face='Arial' size='13pt'>Choose file</font>",
                button_text_left_padding: (width - 70) / 2,
                button_text_top_padding: 1,
                moving_average_history_size: 40,

                // Called when the user chooses a new file from the file browser prompt (begins the upload)
                file_queued_handler: function(file) { swfu.startUpload(); },

                // Called when a file doesn't even begin to upload, because of some error
                file_queue_error_handler: function(file, code, msg) { alert("Sorry, your file wasn't uploaded: " + msg); },

                // Called when an error occurs during upload
                upload_error_handler: function(file, code, msg) { alert("Sorry, your file wasn't uploaded: " + msg); },

                // Called when upload is beginning (switches controls to uploading state)
                upload_start_handler: function() {
                    //alert("Start");
                    swfu.setButtonDimensions(0, height);
                    $("input[name$=_filename]", container).val("");
                    $("input[name$=_guid]", container).val("");
                    $("div.progress-bar div", container).css("width", "0px");
                    $("div.progress-bar", container).show();
                    $("span[id$=_uploading]", container).show();
                    $("span[id$=_completedMessage]", container).html("").hide();

                    if (options.disableDuringUpload)
                        $(options.disableDuringUpload).attr("disabled", "disabled");
                },

                // Called when upload completed successfully (puts success details into hidden fields)
                upload_success_handler: function(file, response) {
                    //alert("Success");
					width = 0;
                    $("input[name$=_filename]", container).val(file.name);
                    $("input[name$=_guid]", container).val(response);
                    $("span[id$=_completedMessage]", container).html("<span class='bright'>Success!</span> Uploaded <b>{0}</b> ({1} KB)."
                                .replace("{0}", file.name)
                                .replace("{1}", Math.round(file.size / 1024))
                            );
                },

                // Called when upload is finished (either success or failure - reverts controls to non-uploading state)
                upload_complete_handler: function() {
                    //alert("Complete");
                    var clearup = function() {
                        $("div.progress-bar", container).hide();
                        $("span[id$=_completedMessage]", container).show();
                        $("span[id$=_uploading]", container).hide();
                        swfu.setButtonDimensions(width, height);
                    };
                    if ($("input[name$=_filename]", container).val() != "") // Success
                        $("div.progress-bar div", container).animate({ width: "100%" }, { duration: "fast", queue: false, complete: clearup });
                    else // Fail
                        clearup();

                    if (options.disableDuringUpload)
                        $(options.disableDuringUpload).removeAttr("disabled");
                },

                // Called periodically during upload (moves the progess bar along)
                upload_progress_handler: function(file, bytes, total) {
                    var percent = 100 * bytes / total;
                    $("div.progress-bar div", container).animate({ width: percent + "%" }, { duration: 500, queue: false });
                    //this.customSettings.tdCurrentSpeed.innerHTML = SWFUpload.speed.formatBPS(file.currentSpeed);
                    //this.customSettings.tdAverageSpeed.innerHTML = SWFUpload.speed.formatBPS(file.averageSpeed);
                    this.customSettings.tdMovingAverageSpeed.innerHTML = SWFUpload.speed.formatBPS(file.movingAverageSpeed);
                    this.customSettings.tdTimeRemaining.innerHTML = SWFUpload.speed.formatTime(file.timeRemaining);
                    this.customSettings.tdTimeElapsed.innerHTML = SWFUpload.speed.formatTime(file.timeElapsed);
                    this.customSettings.tdPercentUploaded.innerHTML = SWFUpload.speed.formatPercent(file.percentUploaded);
                    this.customSettings.tdSizeUploaded.innerHTML = SWFUpload.speed.formatBytes(file.sizeUploaded);

                },

                custom_settings: {
                    tdMovingAverageSpeed: document.getElementById("" + id + "_MovingAverageSpeed"),
                    tdTimeRemaining: document.getElementById("" + id + "_TimeRemaining"),
                    tdTimeElapsed: document.getElementById("" + id + "_TimeElapsed"),
                    tdPercentUploaded: document.getElementById("" + id + "_PercentUploaded"),
                    tdSizeUploaded: document.getElementById("" + id + "_SizeUploaded")
                }

            };
            swfu = new SWFUpload($.extend(defaults, options || {}));

            // Called when user clicks "cancel" (forces the upload to end, and eliminates progress bar immediately)
            $("span[id$=_uploading] input[type='button']", container).click(function() {
                swfu.cancelUpload(null, false);
            });

            // Give the effect of preserving state, if requested
            if (options.existingFilename || "" != "") {
                $("span[id$=_completedMessage]", container).html("<span class='bright'>Success!</span> Uploaded <b>{0}</b> ({1} KB)."
                                .replace("{0}", options.existingFilename)
                                .replace("{1}", options.existingFileSize ? Math.round(options.existingFileSize / 1024) : "?")
                            ).show();
                $("input[name$=_filename]", container).val(options.existingFilename);
            }
            if (options.existingGuid || "" != "")
                $("input[name$=_guid]", container).val(options.existingGuid);
        });
    }
})(jQuery);

function CreateUploader(Position,UploadUrl) {
    $(function() {
        $(Position).makeAsyncUploader({
            upload_url: UploadUrl,
	        flash_url: '/Content/Flash/swfupload.swf',
	        button_image_url: '/Content/Images/blank-button.png',
	        button_text: '<font face="Helvetica, Arial" size="13pt" color="#ffffff">Upload File</font>',
	        disableDuringUpload: 'input[type="submit"]',
	        file_size_limit: '8024 MB',
	        button_text_top_padding: 2
        });
    });
}
