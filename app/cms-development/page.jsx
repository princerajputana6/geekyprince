import Breadcrumb from "@/components/Common/Breadcrumb";
import ServiceBlock from "@/components/Common/ServiceBlock";
import cms_seo from "@/public/images/cms_seo.png";

const cmsDevelopment = () => {
  return (
    <>
      <Breadcrumb
        pageName="CMS Development"
        description="
        CMS development involves creating and customizing content management systems, which are software platforms that allow users to create, manage, and publish digital content. This includes tasks such as designing and implementing templates, configuring user permissions, and integrating third-party plugins and applications. The goal is to provide an intuitive and efficient platform for content creation and management that meets the needs of the organization or individual using it."
      />
 <div class="dark:bg-gray-900">
        <section class="container mx-auto py-20">
          <div class="flex flex-col items-center justify-center">
            <div class="text-gray-800 text-center text-3xl font-black leading-10 dark:text-white md:text-4xl lg:text-5xl">
              <h1>Our Web Building Tech Stacks</h1>
            </div>
            <div class="grid items-center justify-center gap-y-20 gap-x-16 pt-24 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-20 lg:px-10 xl:gap-y-16 xl:gap-x-0 xl:px-0">
                <ServiceBlock
                image={"https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_7-svg1.svg"}
                title={"Access Ready-to-use Plugins"}
                description={"It is a large community and provides a wide range of plugins. It offers easy to the various business owners who are looking for a unique solution for their business."}
                />
                <ServiceBlock
                image={"https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_7-svg2.svg"}
                title={"Lower Maintenance Cost"}
                description={"Content Management System is usually used for producing and running a website. With the help of this, even a non-tech person can place content on a web site and also effortlessly keep track of it."}
                />
                <ServiceBlock
                image={"https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_7-svg3.svg"}
                title={"No Developers Required"}
                description={"Content over the website is the soul of any website. It needs updates to remain fresh and updated. CMS allows you to create content using a simple interface without any hassles."}
                />
                <ServiceBlock
                image={"https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_7-svg4.svg"}
                title={"Complete Content Control"}
                description={"A good CMS enables businesses to create, edit, publish and archive the content. Afterwards to distribute such content, data, and information very quickly and efficiently."}
                />
                <ServiceBlock
                image={"https://tuk-cdn.s3.amazonaws.com/can-uploader/feature_7-svg5.svg"}
                title={"Improvise Customer Service"}
                description={"CMS helps to collect customer data from a range of digital touchpoints. And it helps to tell how users are engaging with the brand. Also, it can give an idea of adaptability to the business."}
                />
                <ServiceBlock
                image={cms_seo}
                title={"Manage SEO Effectively"}
                description={"CMS automates the URL for each page on your site. And a good CMS also includes SEO. It makes sure that the content will rank well in the search engines that will help in business growth."}
                />
            </div>
          </div>
        </section>
      </div>
A content Management System generally refers to a web-based application that enables multiple users with different privilege levels to manage any type of data, content, or information of any website application, or project on the internet forum.
    </>
  );
};

export default cmsDevelopment;
