  <footer>
    <p><small lang="en">&copy; 2021 <?php echo h(SITE_NAME); ?>.</small></p>
  </footer>
  <script type="application/ld+json">
  {
    "@context" : "https://schema.org",
    "@type" : "Organization",
    "name" : "<?php echo h(COMPANY_OWNER); ?>",
    "founder": "<?php echo h(COMPANY_NAME); ?>",
    "foundingDate": "<?php echo h(COMPANY_DATE); ?>",
    "description" : "<?php echo h($page['description']); ?>",
    "url" : "<?php echo h(SITE_URL); ?>",
    "logo": "<?php echo h(COMPANY_LOGO); ?>",
    "address": {
        "@type": "PostalAddress",
        "addressLocality": "<?php echo h(COMPANY_ADDRESS1); ?>",
        "addressRegion": "<?php echo h(COMPANY_PREF); ?>",
        "postalCode": "<?php echo h(COMPANY_POSTAL_CODE); ?>",
        "streetAddress": "<?php echo h(COMPANY_ADDRESS2); ?>",
        "addressCountry": "JP"
    },
    "contactPoint" :[
        {
          "@type" : "ContactPoint",
          "contactType" : "customer service"
        }
    ]},
    "sameAs":[
      "https://twitter.com/<?php echo h(TWITTER); ?>",
      "https://www.instagram.com/<?php echo h(INSTAGRAM); ?>/"
    ]
  }
  </script>
</body>
</html>
