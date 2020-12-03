<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <title>Online Pharmacy Store</title>
            </head>
            <style>
                td{
                    font-weight:bolder;
                    background-color: violet;
                    text-align: center;
                }
            </style>
            <body>
                <h1 align= "center" style="color:black;">Online Pharmacy Store</h1>
                <table style="width:50%; border:3px solid white; color: black; margin-left: auto; margin-right: auto; padding: 5px;">
                    <caption style="text-align:left">Medical Store Stocks!!</caption>
                    <tr bgcolor= "black" style="width:50%; border:3px solid black; color: white; margin-left: auto; margin-right: auto; padding: 5px;">
                        <th>Brand</th>
                        <th>Cost</th>
                        <th>Availability</th>
                        <th>Composition</th>
                    </tr>
                    <xsl:for-each select="Product/Medicine">
                        <tr>
                            <td><xsl:value-of select="Name"/></td>
                            <td><xsl:value-of select="Price"/></td>
                            <td><xsl:value-of select="Availability"/></td>
                            <td><xsl:value-of select="Composition"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>