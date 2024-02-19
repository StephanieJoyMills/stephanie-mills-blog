# stephanie-mills

Next.js static blog using Notion as a Content Management System (CMS). Supports both Blog format Post as well as Page format for Resume. Deployed using Vercel.

[Demo Blog](https://morethan-log.vercel.app) | [Demo Resume](https://morethan-log.vercel.app/resume)

## Features

**📒 Writing posts using notion**

- No need of commiting to Github for posting anything to your website.
- Posts made on Notion are automaticaly updated on your site.

**📄 Use as a page as resume**

- Useful for generating full page sites using Notion.
- Can be used for Resume, Portfolios etc.

**👀 SEO friendly**

- Dynamically generates OG IMAGEs (thumbnails!) for posts. ([og-image-korean](https://github.com/morethanmin/og-image-korean)).
- Dynamically creates sitemap for posts.

**🤖 Customisable and Supports various plugin through CONFIG**

- Your profile information can be updated through Config. (`site.config.js`)
- Plugins support includes, Google Analytics, Search Console and also Commenting using Github Issues(Utterances) or Cusdis.

## Getting Started

1. Star this repo.
2. [Fork](https://github.com/morethanmin/morethan-log/fork) the repo to your Profile.
3. Duplicate [this Notion template](https://quasar-season-ed5.notion.site/12c38b5f459d4eb9a759f92fba6cea36?v=2e7962408e3842b2a1a801bf3546edda), and Share to Web.
4. Copy the Web Link and keep note of the Notion Page Id from the Link which will be in this format [username.notion.site/`NOTION_PAGE_ID`?v=`VERSION_ID`]. 
5. Clone your forked repo and then customize `site.config.js` based on your preference.
6. Deploy on Vercel, with the following environment variables.

   - `NOTION_PAGE_ID` (Required): The Notion page Id got from the Share to Web URL. This is not the entire URL, but just the NOTION_PAGE_ID part as shown above.
   - `NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID` : For Google analytics Plugin.
   - `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` : For Google search console Plugin.
   - `NEXT_PUBLIC_NAVER_SITE_VERIFICATION` : For Naver search advisor Plugin.

## 10 Steps to build  (by 23.06.23)

<details>
   <summary> Click to see guide </summary>
   
   0. Prepare Notion, Vercel account.

   1. ⭐ `Star` and `Fork` this repo.
   <img src='https://github.com/jhk0530/morethan-log/assets/6457691/b0421776-2bfe-42bc-ae31-d90206fd5789' width = '500'>
   <img src='https://github.com/jhk0530/morethan-log/assets/6457691/185a8e4c-4ae2-4a38-b6f4-dc2a06a45c28' width = '500'>

   2. As you `click` the [Notion template](https://quasar-season-ed5.notion.site/12c38b5f459d4eb9a759f92fba6cea36?v=2e7962408e3842b2a1a801bf3546edda), you will see this notion page in your browser. Click `Duplicate` button(복제 in image) in right top.
   <img src='https://github.com/jhk0530/morethan-log/assets/6457691/a5375429-28f0-4bba-a355-0d391cad58db' width = '500'>

   3. And you will see `notion page in notion app` in your account.
   <img src='https://github.com/jhk0530/morethan-log/assets/6457691/09af5533-43d9-48e5-95eb-dcac84c97c1f' width = '500'>

   4. Click `Share` and `Publish` in right top, and check web link. (Copy web link)
   <img src='https://github.com/jhk0530/morethan-log/assets/6457691/886fe4a2-79ca-4dbc-b1e1-93984e7e3f44' width = '500'>
   
   5. `Modify` **site.config.js** file in **your** forked repo.
   > 💡 NOTE. I changed **2 RED PART**
   6. Move and `login` to vercel.
   7. `Build` new project using **Add New...**
   8. `Import` **your forked repository**
   9. `Add` **Environment variabes** to vercel project
   10. `Wait` for the deployment to complete. After the deployment is successful, you should see an image like the one below.
   🥳 Congratulations. Now check out your blog

</details>

# Pushing to Product
Make sure package.json:
"mermaid": "10.0.0-rc.3"
(for dev this is changed to )
"mermaid": "^9.3.0",

