


const scriptsInEvents = {

		async GlobalVariable_Event3_Act8(runtime, localVars)
		{
			console.log("Adv is Active");
		},

		async GlobalVariable_Event4_Act7(runtime, localVars)
		{
			console.log("Adv Not Active");
		},

		async HomepageEvents_Event17_Act1(runtime, localVars)
		{
			
			var gameName = 'super-hoops-basketball';
			var domainName = document.referrer;
			if (domainName == "")
			{
			domainName = window.location.href;
			}
			var domain_parts = domainName.split("://");
			var domain_subparts = domain_parts[1].split("/");
			var hostNames = domain_subparts[0];
			window.open("https://bestgamespot.com?utm_campaign=" + gameName + "&utm_source=" + hostNames + "&utm_medium=game_referral&utm_content=Title", "_blank");
			
		},

		async LoadingEvents_Event1_Act1(runtime, localVars)
		{
			console.log("Version GM 0.2");
		},

		async LoadingEvents_Event6_Act1(runtime, localVars)
		{
			
			var gameName = 'super-hoops-basketball';
			var domainName = document.referrer;
			if (domainName == "")
			{
			domainName = window.location.href;
			}
			var domain_parts = domainName.split("://");
			var domain_subparts = domain_parts[1].split("/");
			var hostNames = domain_subparts[0];
			window.open("https://bestgamespot.com?utm_campaign=" + gameName + "&utm_source=" + hostNames + "&utm_medium=game_referral&utm_content=Loader", "_blank");
			
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

